package com.cit.controller;

import com.cit.service.SubscriberService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/api/v1/subscriber")
@RestController
public class SubscribeController {
    private SubscriberService subscriber;
    private final Logger log = LoggerFactory.getLogger(this.getClass());

    SubscribeController(SubscriberService subscriber){
       this.subscriber=subscriber;
   }

    @RequestMapping(value = "/connected")
    public boolean isConnected(){
        return subscriber.connected();
    }

    @RequestMapping(value = "/connect")
    public void connect(){
        if (subscriber.connected()){
            if (log.isInfoEnabled()){
                log.info("spurious api call");
            }
        }else{
            subscriber.subscribe();
        }
    }
}
