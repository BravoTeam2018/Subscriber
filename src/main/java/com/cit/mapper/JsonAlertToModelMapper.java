package com.cit.mapper;

import com.cit.model.Alert;

import java.io.IOException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class JsonAlertToModelMapper {

    private static final Logger log = LoggerFactory.getLogger(JsonAlertToModelMapper.class);
    public static Alert toModelObject(String jsonAlert){

        Alert alert = null;

        ObjectMapper objectMapper = new ObjectMapper();

        try {
            alert = objectMapper.readValue(jsonAlert, Alert.class);
        }catch (IOException e){
            log.error("Threw an exception in alert mapper, stack follows",e);
        }

        return alert;
    }
}
