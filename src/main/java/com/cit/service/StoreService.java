package com.cit.service;

import com.cit.model.Alert;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class StoreService implements ApplicationListener<AlertEvent>{
    // storing in memory as singleton for now
    private List<Alert> alerts = new ArrayList<>();
    private final Logger log = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private StoreService(){
    }

    public List<Alert> getAlerts() {
        return alerts;
    }

    public void addAlert(Alert alert) {
        alerts.add(alert);
    }

    public List<Alert> getSeverity(String severity){
        List<Alert> severityList = new ArrayList<>();
        for (Alert alert:alerts){
            if (alert.getSeverity().equalsIgnoreCase(severity)){
                severityList.add(alert);
            }
        }
        return severityList;
    }

    public List<Alert> getLocation(String location){
        List<Alert> locationList = new ArrayList<>();
        for (Alert alert:alerts){
            if (alert.getCurrentEvent().getLocation().getRelativeLocation().toLowerCase().contains(location.toLowerCase())){
                locationList.add(alert);
            }
        }
        return locationList;
    }

    public List<Alert> getUser(String user){
        List<Alert> userList = new ArrayList<>();
        for (Alert alert:alerts){
            if (alert.getCurrentEvent().getCardId().equals(user)){
                userList.add(alert);
            }
        }
        return userList;
    }
    public List<Alert> getPanel(String panel){
        List<Alert> panelList = new ArrayList<>();
        for (Alert alert:alerts){
            if (alert.getCurrentEvent().getPanelId().equals(panel)){
                panelList.add(alert);
            }
        }
        return panelList;
    }

    @Override
    public void onApplicationEvent(AlertEvent event) {

        log.info("hello world");
        alerts.add(event.getAlert());
    }
}
