package com.mellado.janken.jankenwebsite.config;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(AbstractHttpConfigurer::disable) // Disable CSRF
                .cors(cors -> cors.configurationSource(corsConfigurationSource())) // Configure CORS
                .authorizeHttpRequests((requests) -> requests
                        .requestMatchers("/api/articles/**").permitAll() // Allow public access to articles
                        .requestMatchers("/api/glossary/**").permitAll() // Allow public access to glossary
                        .requestMatchers("/api/fighting-games/**").permitAll() // Allow public access to fighting-games
                        .requestMatchers("/api/fighting-characters/**").permitAll() // Allow public access to fighting-characters
                        .requestMatchers("/api/move-tags/**").permitAll() // Allow public access to fighting-characters
                        .requestMatchers("/api/tags/**").permitAll() // Allow public access to fighting-characters
                        .requestMatchers("/api/character-moves/**").permitAll() // Allow public access to fighting-characters
                        .requestMatchers("/api/character-combos/**").permitAll() // Allow public access to fighting-characters
                        .anyRequest().authenticated() // Secure all other endpoints
                );
        return http.build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.addAllowedOrigin("http://localhost:3000");
        configuration.addAllowedMethod("*");
        configuration.addAllowedHeader("*");
        configuration.setAllowCredentials(true);
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}
