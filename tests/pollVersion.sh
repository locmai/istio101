while true; do curl -s http://localhost/ | grep version | grep --color -E 'v2|$';sleep 1;done
