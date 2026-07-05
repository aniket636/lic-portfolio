-- LIC Portfolio Database Schema
-- Run this file once to create the database, tables, and seed sample data.

CREATE DATABASE IF NOT EXISTS lic_portfolio CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE lic_portfolio;

-- ---------------------------------------------------------
-- Table: insurance_plans
-- ---------------------------------------------------------
CREATE TABLE IF NOT EXISTS insurance_plans (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  description TEXT NOT NULL,
  benefits JSON NOT NULL,
  eligibility VARCHAR(150) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ---------------------------------------------------------
-- Table: testimonials
-- ---------------------------------------------------------
CREATE TABLE IF NOT EXISTS testimonials (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  role VARCHAR(100),
  rating TINYINT NOT NULL DEFAULT 5 CHECK (rating BETWEEN 1 AND 5),
  message TEXT NOT NULL,
  is_published BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ---------------------------------------------------------
-- Table: contact_messages
-- ---------------------------------------------------------
CREATE TABLE IF NOT EXISTS contact_messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  phone VARCHAR(15) NOT NULL,
  email VARCHAR(150) NOT NULL,
  message TEXT NOT NULL,
  status ENUM('new', 'contacted', 'closed') DEFAULT 'new',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ---------------------------------------------------------
-- Seed data: insurance_plans
-- ---------------------------------------------------------
INSERT INTO insurance_plans (name, description, benefits, eligibility) VALUES
('LIC Jeevan Anand', 'A whole-life endowment plan offering savings plus lifelong life cover.',
 JSON_ARRAY('Maturity benefit + bonus', 'Life cover continues after maturity', 'Tax benefits under 80C'), 'Age 18–50 years'),
('LIC Jeevan Umang', 'Whole life plan with guaranteed yearly income after the premium paying term.',
 JSON_ARRAY('Guaranteed annual income', 'Whole life risk cover', 'Loan facility available'), 'Age 90 days–55 years'),
('LIC Jeevan Labh', 'Limited premium endowment plan combining savings and protection.',
 JSON_ARRAY('Limited premium payment', 'Attractive bonus additions', 'Ideal for goal-based savings'), 'Age 8–59 years'),
('LIC Tech Term', 'A pure online term plan offering high life cover at affordable premiums.',
 JSON_ARRAY('High sum assured, low premium', 'Multiple payout options', 'Optional accidental rider'), 'Age 18–65 years'),
('LIC Children Money Back', 'Secures your child education and future milestones with periodic payouts.',
 JSON_ARRAY('Payouts at key education milestones', 'Premium waiver on parent demise', 'Maturity lump sum'), 'Child age 0–12 years'),
('LIC Pension Plus', 'A retirement-focused plan building a corpus for a worry-free post-retirement life.',
 JSON_ARRAY('Guaranteed pension income', 'Flexible vesting age', 'Death benefit for nominee'), 'Age 25–75 years');

-- ---------------------------------------------------------
-- Seed data: testimonials
-- ---------------------------------------------------------
INSERT INTO testimonials (name, role, rating, message) VALUES
('Anita Verma', 'Schoolteacher, Jaipur', 5, 'Rajesh ji explained every plan patiently and helped me choose the right policy for my daughter education.'),
('Mohit Agarwal', 'Small Business Owner', 5, 'Claim assistance was smooth and quick. He personally followed up until the claim was settled.'),
('Sunita Rathore', 'Homemaker', 4, 'Very knowledgeable about tax-saving plans. Helped my whole family plan our policies properly.'),
('Deepak Chauhan', 'IT Professional', 5, 'Started a SIP through him and the guidance on mutual funds has been excellent so far.');
