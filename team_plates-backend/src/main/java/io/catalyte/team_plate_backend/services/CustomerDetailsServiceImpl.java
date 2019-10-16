package io.catalyte.team_plate_backend.services;

import org.springframework.security.core.userdetails.UserDetails;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import io.catalyte.team_plate_backend.domain.Customer;
import io.catalyte.team_plate_backend.repositories.CustomerRepo;

import static java.util.Collections.emptyList;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;



@Service
public class CustomerDetailsServiceImpl implements UserDetailsService {
	private CustomerRepo customerRepo;
	private static final Logger logger = LoggerFactory.getLogger(CustomerDetailsServiceImpl.class);
	
	public CustomerDetailsServiceImpl(CustomerRepo customerRepo) {
		this.customerRepo = customerRepo;
	}
	
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		Customer customer = customerRepo.findByEmailAddress(email);
		if(customer == null) {
			throw new UsernameNotFoundException(email);
		}
//		GrantedAuthority role = new SimpleGrantedAuthority("ROLE_Customer");
		return new User(customer.getEmailAddress(),customer.getPassword(), emptyList());
	}
	
//	private Collection<? extends GrantedAuthority> setRoles(List<String> roles) {
//		List<GrantedAuthority> authorities = new ArrayList<>();
//		for(String role: roles) {
//			authorities.add(new SimpleGrantedAuthority("ROLE_" + role));
//		}
//		
//		return authorities;
//	}
	
	
}
