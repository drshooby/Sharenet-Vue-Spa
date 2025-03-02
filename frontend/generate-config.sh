#!/bin/sh
# Create config file from template
envsubst < dist/config.template.js > dist/config.js
# Start the application
exec "$@"