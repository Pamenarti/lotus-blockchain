import pathlib
from typing import Dict

from lotus.consensus.constants import ConsensusConstants
from lotus.consensus.default_constants import DEFAULT_CONSTANTS
from lotus.harvester.harvester import Harvester
from lotus.harvester.harvester_api import HarvesterAPI
from lotus.rpc.harvester_rpc_api import HarvesterRpcApi
from lotus.server.outbound_message import NodeType
from lotus.server.start_service import run_service
from lotus.types.peer_info import PeerInfo
from lotus.util.config import load_config_cli
from lotus.util.default_root import DEFAULT_ROOT_PATH

# See: https://bugs.python.org/issue29288
"".encode("idna")

SERVICE_NAME = "harvester"


def service_kwargs_for_harvester(
    root_path: pathlib.Path,
    config: Dict,
    consensus_constants: ConsensusConstants,
) -> Dict:
    connect_peers = [PeerInfo(config["farmer_peer"]["host"], config["farmer_peer"]["port"])]
    overrides = config["network_overrides"]["constants"][config["selected_network"]]
    updated_constants = consensus_constants.replace_str_to_bytes(**overrides)

    harvester = Harvester(root_path, config, updated_constants)
    peer_api = HarvesterAPI(harvester)
    network_id = config["selected_network"]
    kwargs = dict(
        root_path=root_path,
        node=harvester,
        peer_api=peer_api,
        node_type=NodeType.HARVESTER,
        advertised_port=config["port"],
        service_name=SERVICE_NAME,
        server_listen_ports=[config["port"]],
        connect_peers=connect_peers,
        auth_connect_peers=True,
        network_id=network_id,
    )
    if config["start_rpc_server"]:
        kwargs["rpc_info"] = (HarvesterRpcApi, config["rpc_port"])
    return kwargs


def main() -> None:
    config = load_config_cli(DEFAULT_ROOT_PATH, "config.yaml", SERVICE_NAME)
    kwargs = service_kwargs_for_harvester(DEFAULT_ROOT_PATH, config, DEFAULT_CONSTANTS)
    return run_service(**kwargs)


if __name__ == "__main__":
    main()
