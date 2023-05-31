How to install Git using Cloud shell

sudo apt-get install git
	git config --global user.email 'sureshchouksey@gmail.com'
	git config --global user.name ‘suresh chouksey’
	ssh-keygen -t rsa -b 4096 -C 'sureshchouksey@gmail.com'
	eval "$(ssh-agent -s)"
	ssh-add ~/.ssh/id_rsa
	cat < ~/.ssh/id_rsa.pub
