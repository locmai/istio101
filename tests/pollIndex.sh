while true; do curl -s http://localhost/ | grep --color -E 'v2|$';sleep 1;done
