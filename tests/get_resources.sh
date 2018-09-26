echo -e "Pods" \
&& kubectl get pods && echo -e "Services" \
&& kubectl get svc && echo -e "VirtualServices" \
&& kubectl get virtualservices && echo -e "Destination Rules" \
&& kubectl get destinationrule && echo -e "Gateway" \
&& kubectl get gateway
