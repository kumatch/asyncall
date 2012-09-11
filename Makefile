CWD := $(shell pwd)
LIB := $(CWD)/lib

all: clean grunt

clean:
	rm -rf $(LIB)/*.min.js

grunt:
	grunt
