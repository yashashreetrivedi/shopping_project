package io.catalyte.team_plate_backend.security;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Map;
import java.util.stream.Collectors;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.Claim;

public class JWTAuthorizationFilter extends BasicAuthenticationFilter {
	private static final Logger logger = LoggerFactory.getLogger(JWTAuthenticationFilter.class);
	
	public JWTAuthorizationFilter(AuthenticationManager authManager) {
		super(authManager);
	}
	
	@Override
	protected void doFilterInternal(HttpServletRequest req, HttpServletResponse res, FilterChain chain) throws IOException, ServletException {
		String header = req.getHeader(SecurityConstants.HEADER_STRING);
		
		  if (header == null || !header.startsWith(SecurityConstants.TOKEN_PREFIX)) {
	            chain.doFilter(req, res);
	            return;
	        }

	        UsernamePasswordAuthenticationToken authentication = getAuthentication(req);

	        SecurityContextHolder.getContext().setAuthentication(authentication);
	        chain.doFilter(req, res);
	}
	
	private UsernamePasswordAuthenticationToken getAuthentication(HttpServletRequest request) {
        String token = request.getHeader(SecurityConstants.HEADER_STRING);
        if (token != null) {
            // parse the token.
            String user = JWT.require(Algorithm.HMAC512(SecurityConstants.SECRET.getBytes()))
                    .build()
                    .verify(token.replace(SecurityConstants.TOKEN_PREFIX, ""))
                    .getSubject();
           
//            Collection<? extends GrantedAuthority> authorities = Arrays.asList(JWT.decode(token).getClaims().get("roles").toString().split(",")).stream()
//            		.map(role -> new SimpleGrantedAuthority(role))
//            		.collect(Collectors.toList());
            if (user != null) {
            	GrantedAuthority role = new SimpleGrantedAuthority("ROLE_Customer");
                return new UsernamePasswordAuthenticationToken(user, null, Arrays.asList(role));
            }
            return null;
        }
        return null;
    }
}
