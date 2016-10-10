#!/bin/bash
mkdir -p dist/lib
rm dist/lib/*

cp node_modules/react/dist/react.js dist/lib
cp node_modules/react/dist/react.min.js dist/lib
cp node_modules/react-dom/dist/react-dom.js dist/lib
cp node_modules/react-dom/dist/react-dom.min.js dist/lib
