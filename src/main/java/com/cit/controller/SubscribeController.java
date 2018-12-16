package com.cit.controller;

import com.cit.service.SubscriberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/api/v1/subscriber")
@RestController
public class SubscribeController {
    private SubscriberService subscriber;

    @Autowired
    SubscribeController(SubscriberService subscriber){
       this.subscriber=subscriber;
   }

    @RequestMapping(value = "/connected")
    public boolean isConnected(){
        return subscriber.connected();
    }

    @RequestMapping(value = "/connect")
    public void connect(){
        subscriber.subscribe();
    }
}
