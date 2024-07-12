package com.example.demo.web;

import org.springframework.web.bind.annotation.RestController;

import com.example.demo.services.ChatIaService;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
@RequestMapping("/chat")
@AllArgsConstructor
public class ChatRestController {
    
    private final ChatIaService chatIaService;

    @GetMapping("/ask")
    public String ask(String question) {
        return this.chatIaService.ask(question);
    }
    

}
