import React, {Component} from 'react';
import {Navbar, Nav, NavItem, NavDropdown} from 'react-bootstrap';
import {LinkContainer} from "react-router-bootstrap";
import {Link} from "react-router-dom"

export default class NavigationBar extends Component {
    render() {
        return (
            <Navbar className="nav-bar">
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/"><strong>Text Tools</strong></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavDropdown eventKey={3} title="Select Tool" id="basic-nav-dropdown">
                            <NavItem>
                                <LinkContainer to="/sentence-suggester">
                                    <strong>Sentence Suggester</strong>
                                </LinkContainer>
                            </NavItem>
                            <NavItem>
                                <LinkContainer to="/keywords-extractor">
                                    <strong>Keywords Extractor</strong>
                                </LinkContainer>
                            </NavItem>
                            <NavItem>
                                <LinkContainer to="/sentiment-analyzer">
                                    <strong>Sentiment Analyzer</strong>
                                </LinkContainer>
                            </NavItem>
                            <NavItem>
                                <LinkContainer to="/similarity-checker">
                                    <strong>Similarity Checker</strong>
                                </LinkContainer>
                            </NavItem>
                            <NavItem>
                                <LinkContainer to="/named-entity-recognizer">
                                    <strong>Named Entity Recognizer</strong>
                                </LinkContainer>
                            </NavItem>
                            <NavItem>
                                <LinkContainer to="/text-summarizer">
                                    <strong>Text Summarizer</strong>
                                </LinkContainer>
                            </NavItem>
                            <NavItem>
                                <LinkContainer to="/content-enricher">
                                    <strong>Content Enricher</strong>
                                </LinkContainer>
                            </NavItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}