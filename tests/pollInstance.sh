while true; do curl -s http://localhost/ | grep instance | grep --color -E 'v2|$';sleep 1;done
