# Lotus-Blockchain

![Lotus](https://i0.wp.com/Lotus.farm/wp-content/uploads/2021/05/banner-logo.pn)


Lotus is the world’s first block chain to utilize the revolutionary new consensus algorithm Proof of Space and Time (PoST) AND recycled crypto resources, allowing it to be farmed on existing Chia plots

Python 3.7+ is required. Make sure your default python version is >=3.7
by typing `python3`.

## Running

### Windows 

Lotus Windows client can be downloaded from [here](https://elasticbeanstalk-us-west-2-793349189011.s3.us-west-2.amazonaws.com/Lotus-win32-x64.zip).


### MacOS build
```
git clone https://github.com/Lotus-Network/lotus-blockchain
cd lotus-blockchain
sh install.sh
. ./activate
sh install-gui.sh
cd lotus-blockchain-gui
npm install
npm run build
npm run electron &
```

### Windows
Almost done.

### Ubuntu/Debian
We have an experimental GUI installer (x86_64) for Ubuntu 18.04 Desktop and newer and Debian Buster w GUI and newer. There is also an experimental GUI installer for ARM64 Ubuntu and Debian/Raspberry Pi OS 64. Binary CLI tools can be found in `/usr/lib/chia-blockchain/resources/app.asar.unpacked/daemon/`

Follow below install instructions for Ubuntu 20.04 LTS. If you are installing on Ubuntu 18.04 LTS you should use Python 3.7 instead: `sudo apt-get install python3.7-venv python3.7-distutils python3.7-dev git lsb-release -y`
```
sudo apt-get update
sudo apt-get upgrade -y

# Install Git
sudo apt install git -y

# Checkout the source and install
git clone https://github.com/Lotus-Network/lotus-blockchain
cd Lotus-blockchain
sh install.sh
. ./activate

# The GUI requires you have Ubuntu Desktop or a similar windowing system installed.
# You can not install and run the GUI as root
sh install-gui.sh
cd lotus-blockchain-gui

npm install
npm run build
npm run electron &
```

### Update
```
cd lotus-blockchain
. ./activate
Lotus stop -d all
deactivate
git fetch
git reset --hard FETCH_HEAD
# If you get RELEASE.dev0 then delete the package-lock.json in lotus-blockchain-gui and install.sh again
git status
# git status should say "nothing to commit, working tree clean", 
# if you have uncommitted changes, RELEASE.dev0 will be reported.
sh install.sh
. ./activate
Lotus init
# The GUI requires you have Ubuntu Desktop or a similar windowing system installed.
# You can not install and run the GUI as root
cd lotus-blockchain-gui
git fetch
cd ..
chmod +x ./install-gui.sh
./install-gui.sh
cd lotus-blockchain-gui
npm install
npm run build
npm run electron &
```
#### Troubleshooting

Sometimes stray daemons left over from previously running processes will cause strange bugs/errors when upgrading to a new version. Make sure all daemons and Lotus processes are killed before installing or upgrading.

This is normally done by executing Lotus stop -d all from the upgrade example above.
But it doesn't hurt to double check using ps -Af | grep Lotus to make sure there are no Lotus processes left running. You may have to manually kill the Lotus daemon if an install and Lotus start was performed without first running Lotus stop -d all

If all else fails, rebooting the machine and restarting the Lotus daemon/processes usually does the trick.

### CentOS/Red Hat/Fedora
```
sudo yum install epel-release -y
sudo yum update -y
# Compiling python 3.7 is generally required on CentOS 7.7 and newer
sudo yum install gcc openssl-devel bzip2-devel zlib-devel libffi libffi-devel -y
sudo yum install libsqlite3x-devel -y
# possible that on some RHEL based you also need to install
sudo yum groupinstall "Development Tools" -y
sudo yum install python3-devel gmp-devel  boost-devel libsodium-devel -y
sudo yum install wget -y
sudo wget https://www.python.org/ftp/python/3.7.7/Python-3.7.7.tgz
sudo tar -zxvf Python-3.7.7.tgz ; cd Python-3.7.7
./configure --enable-optimizations; sudo make -j$(nproc) altinstall; cd ..
# Download and install the source version
git clone https://github.com/Lotus-Network/Lotus-blockchain.git
cd Lotus-blockchain
sh install.sh
. ./activate
# The GUI requires a windowing system to be installed.
# You can not install and run the GUI as root
sh install-gui.sh
cd lotus-blockchain-gui
npm install
npm run build
npm run electron
```

### Amazon Linux 2
```
sudo yum update -y
sudo yum install python3 git -y
git clone https://github.com/Lotus-Network/lotus-blockchain.git
cd lotus-blockchain
sh install.sh
. ./activate
```
