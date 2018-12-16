package com.cit.service;

import com.cit.service.subscriber.GenerteId;
import com.cit.service.subscriber.MqttSubscribe;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Service;


@Service
@PropertySource("classpath:application.properties")
public class SubscriberService {

    private String mqttBroker = "tcp://13.82.192.85:8883";//"tcp://iot.eclipse.org:1883";//
    private String mqttTopic  = "validation.alerts.bravo";
    private ApplicationEventPublisher applicationEventPublisher;
    private final Logger log = LoggerFactory.getLogger(this.getClass());
    private MqttSubscribe subscriber;

    @Autowired
    public SubscriberService(ApplicationEventPublisher applicationEventPublisher){
        this.applicationEventPublisher = applicationEventPublisher;
        this.subscriber = new MqttSubscribe(applicationEventPublisher);
    }

    public void subscribe(){
        subscriber.setClientId(GenerteId.generateClientId());
        subscriber.connect(mqttBroker,mqttTopic);
    }

    public boolean connected(){
        return subscriber.isConnected();
    }
}