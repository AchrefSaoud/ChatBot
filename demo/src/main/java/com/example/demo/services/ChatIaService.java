package com.example.demo.services;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.stereotype.Service;

@Service
public class ChatIaService {
    private ChatClient chatClient;

    public ChatIaService(ChatClient.Builder chatClientBuilder) {
        this.chatClient = chatClientBuilder.build();
    }

    public String ask(String question){
        return this.chatClient.prompt().user(question).call().content();
    }
}
