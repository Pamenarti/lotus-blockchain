import os
from pathlib import Path

DEFAULT_ROOT_PATH = Path(os.path.expanduser(os.getenv("lotus_ROOT", "~/.lotus-blockchain/mainnet"))).resolve()
