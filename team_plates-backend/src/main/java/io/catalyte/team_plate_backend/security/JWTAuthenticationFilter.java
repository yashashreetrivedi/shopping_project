package io.catalyte.team_plate_backend.security;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.auth0.jwt.JWT;
import com.auth0.jwt.interfaces.Claim;

import static com.auth0.jwt.algorithms.Algorithm.HMAC512;
import com.fasterxml.jackson.databind.ObjectMapper;

import io.catalyte.team_plate_backend.domain.Customer;

public class JWTAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
	
	private AuthenticationManager authenticationManager;
	
	
	public JWTAuthenticationFilter(AuthenticationManager authenticationManager) {
		this.authenticationManager = authenticationManager;
	}
	
	@Override
	public Authentication attemptAuthentication(HttpServletRequest req, HttpServletResponse res) throws AuthenticationException {
		try {
			Customer creds = new ObjectMapper()
					.readValue(req.getInputStream(), Customer.class);
			return authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(
						creds.getEmailAddress(), creds.getPassword(), new ArrayList<>())
					);
		} catch (IOException e) {
			throw new RuntimeException(e);
		}
	}
	
	@Override 
	protected void successfulAuthentication(HttpServletRequest req, HttpServletResponse res, FilterChain chain, Authentication auth) throws IOException, ServletException {
		String token = JWT.create()
				.withSubject(((User) auth.getPrincipal()).getUsername())
				.withExpiresAt(new Date(System.currentTimeMillis() + SecurityConstants.EXPIRATION_TIME))
				.withArrayClaim("roles", new String[] {"customer"})
	                .sign(HMAC512(SecurityConstants.SECRET.getBytes()));
	        res.addHeader(SecurityConstants.HEADER_STRING, SecurityConstants.TOKEN_PREFIX + token);
	        res.addHeader("Access-Control-Expose-Headers", "Authorization");
	        Map<String, Claim> decoded = JWT.decode(token).getClaims();
	        Claim claim = decoded.get("roles");
	        res.addHeader("roles", claim.asArray(String.class)[0]);
	        
	}

}
