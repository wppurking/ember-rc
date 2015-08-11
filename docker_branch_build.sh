#!/bin/bash
rm -rf tmp/ && rm -rf dist/ && ember build -prod && git checkout dockerfile && git add -f dist/ && git commit -am 'update dist/' && git push origin dockerfile && git checkout master
