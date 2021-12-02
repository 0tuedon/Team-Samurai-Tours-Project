# Clone this git repo:
git clone git@github.com:0tuedon/Team-Samurai-Tours-Project.git


cd /

# The apps are linked to as git submodules.
# This will take some time... (see comment below for possible speedup)
git submodule update --init

# OR if you've got git 2.9+ installed try to run updates in parallel:
# git submodule update --init --jobs 4
