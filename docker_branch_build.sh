#!/bin/bash
rm -rf tmp/ && rm -rf dist/ && ember build -prod && mv dist dist_bak && git checkout dockerfile && rm -rf dist && mv dist_bak dist && git add -f dist/ && git commit -am 'update dist/' && git push origin dockerfile && git checkout master
