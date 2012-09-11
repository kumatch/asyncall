CWD := $(shell pwd)
LIB := $(CWD)/lib

all: clean grunt

clean:
	rm -rf $(CWD)/*.min.js

grunt:
	grunt
