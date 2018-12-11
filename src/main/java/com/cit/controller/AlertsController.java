package com.cit.controller;

import com.cit.model.Alert;
import com.cit.service.StoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping("/api/v1/alerts")
@RestController
public class AlertsController {

    private StoreService alertList;

    @Autowired
    public AlertsController(StoreService alertList){
        this.alertList = alertList;
    }

    @GetMapping
    public List<Alert> list(){
        return alertList.getAlerts();
    }

    @GetMapping("/severity/{severity}")
    public List<Alert> getSeverity(@PathVariable("severity") String severity){
        return alertList.getSeverity(severity);
    }

    @GetMapping("/panel/{panelId}")
    public List<Alert> getPanel(@PathVariable("panelId") String panelId){
        return alertList.getPanel(panelId);
    }

    @GetMapping("/user/{userId}")
    public List<Alert> getUser(@PathVariable("userId") String userId){
        return alertList.getUser(userId);
    }

    @GetMapping("/location/{location}")
    public List<Alert> getLocation(@PathVariable("location") String location){
        return alertList.getLocation(location);
    }
}
