#!/bin/bash

# Check if Python is installed
if ! command -v python3 &>/dev/null; then
    echo "Python is not installed. Installing..."
    
    # Install Python
    sudo apt update
    sudo apt install -y python3
fi

# Start the Discord.js bot
node index.js
