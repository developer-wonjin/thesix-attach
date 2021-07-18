package org.thesix.attach.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
public class TestController {

    @GetMapping("/aaa")
    public String aaa(){
        return "BBBBBBBBBBBBBBB";
    }
}
