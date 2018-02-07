function getGraphDataSets() {

    const loadSecurityAttribution = function (Graph) {
        Graph
            .cooldownTicks(200)
            .nodeLabel('id')
            .autoColorBy('group')
            .forceEngine('ngraph')
            .linkOpacity(0.5)
            .nodeRelSize(6)
            .graphData({
                "nodes": [
                    {"id": "Security Attribution Process", "group": 1},
                    {"id": "Security Attribution", "group": 2},
                    {"id": "Legal & Policy", "group": 2},
                    {"id": "Technical Analysis", "group": 3},
                    {"id": "Profiling Attacks", "group": 3},
                    {"id": "Network Analysis", "group": 4},
                    {"id": "Flow Analysis (e.g. NetFlow, sFlow, IPFIX)", "group": 5},
                    {"id": "Digital Forensic", "group": 4},
                    {"id": "Reverse Engineering", "group": 4},
                    {"id": "Indicators of Compromise (IOCs)", "group": 4},
                    {"id": "Packet Analysis (e.g. Wireshark, Deep Packet Inspection)", "group": 5},
                    {"id": "Log Files Analysis", "group": 5},
                    {"id": "Kernel Level Analysis (e.g. Progger)", "group": 5},
                    {
                        "id": "File System Analysis (e.g. Modified, Accessed, Creation of files, Browsing History/Cache)",
                        "group": 5
                    },
                    {"id": "Metadata", "group": 5},
                    {"id": "Digital Fingerprint", "group": 5},
                    {"id": "Behavioural", "group": 5},
                    {"id": "Patterns in Binary File Formats", "group": 6},
                    {"id": "Decompilation of Binary Executables", "group": 6},
                    {"id": "Black-box Testing of Applications", "group": 6},
                    {"id": "Connections from Unusual Locations", "group": 6},
                    {"id": "Repeated Login Attempts from Remote Hosts", "group": 6},
                    {"id": "Repeated Probes of Available Services", "group": 6},
                    {"id": "Outgoing Connections to Unusual Locations", "group": 6},
                    {"id": "Missing Logs or Logs with Incorrect Permissions or Ownership", "group": 6},
                    {"id": "Modifications to System Software and Configuration Files", "group": 6},
                    {"id": "Arbitrary Data in Log Files", "group": 6},
                    {"id": "Presence of New, Unfamiliar Files or Programs", "group": 6},
                    {"id": "Changes in File Permissions", "group": 6},
                    {"id": "IP/MAC Address", "group": 6},
                    {"id": "Text Content", "group": 6},
                    {"id": "Email Address", "group": 6},
                    {"id": "Domain Names", "group": 6},
                    {"id": "Hash/Message Digest (e.g.MD5, SHA256)", "group": 6},
                    {"id": "Digital Watermarking", "group": 6},
                    {"id": "Combination of Actions & Other Indicators", "group": 6},
                    {"id": "Unfamiliar Processes", "group": 7},
                    {"id": "Unusual Graphic Displays or Text Messages", "group": 7},
                    {"id": "International", "group": 8},
                    {"id": "National", "group": 8},
                    {"id": "Convention & Regulation", "group": 9},
                    {"id": "Act", "group": 9},
                    {"id": "Act ", "group": 9},
                    {"id": "Convention & Regulation ", "group": 9},
                    {"id": "Government", "group": 10},
                    {"id": "Industry", "group": 10},
                    {"id": "Bridging Bodies", "group": 11},
                    {"id": "Global", "group": 12},
                    {"id": "Regional", "group": 13},
                    {"id": "United Nations Internet Government Forum", "group": 14},
                    {"id": "INTERPOL", "group": 14},
                    {"id": "Council of Europe; Conventions on Cybercrime", "group": 14},
                    {"id": "United Nations Group of Governmental Experts", "group": 14},
                    {"id": "Forum for Incident Response Security Team (FIRST)", "group": 14},
                    {"id": "G8 24/7 Cybercrime Network", "group": 14},
                    {"id": "Asia Pacfic Computer Emergency Response Team (AP CERT)", "group": 15},
                    {"id": "European Network Information Security Agency (ENISA)", "group": 15},
                    {"id": "Regional Internet Registries (RIRs)", "group": 15},
                    {"id": "Inter-American Cooperation Portal on Cyber-Crime", "group": 15},
                    {"id": "NATO", "group": 15},
                    {"id": "Motive", "group": 16},
                    {"id": "Ideological", "group": 17},
                    {"id": "Financial", "group": 17},
                    {"id": "Emotional or Psychological", "group": 17},
                    {"id": "Intelligence", "group": 17},
                    {"id": "Personal Entertainment", "group": 17},
                    {"id": "Service", "group": 17},
                    {"id": "Destruction", "group": 17},
                    {"id": "Sexual Impulse", "group": 17},
                    {"id": "Psychiatric Illness", "group": 17},
                    {"id": "Undefined", "group": 17},
                    {"id": "Offender", "group": 18},
                    {"id": "Undefined ", "group": 19},
                    {"id": "Individual", "group": 19},
                    {"id": "Hacktivists", "group": 19},
                    {"id": "Country", "group": 19},
                    {"id": "Organized Crime", "group": 19},
                    {"id": "Terrorist", "group": 19},
                    {"id": "Private Sector", "group": 19},
                    {"id": "Attribution Attack Types", "group": 20},
                    {"id": "Advanced Persistent Threat (APT)", "group": 21},
                    {"id": "Spyware", "group": 21},
                    {"id": "Distributed Denial of Service Attack (DDoS)", "group": 21},
                    {"id": "Worm, Virus", "group": 21},
                    {"id": "Trojan", "group": 21},
                    {"id": "Ransomware", "group": 21},
                    {"id": "Social Engineering/Phishing", "group": 21},
                    {"id": "Man-in-the-Middle", "group": 21},
                    {"id": "Adware", "group": 21},


                ],
                "links": [
                    {"source": "Security Attribution Process", "target": "Security Attribution", "value": 1},
                    {"source": "Security Attribution Process", "target": "Legal & Policy", "value": 1},
                    {"source": "Security Attribution", "target": "Technical Analysis", "value": 1},
                    {"source": "Security Attribution", "target": "Profiling Attacks", "value": 1},
                    {"source": "Technical Analysis", "target": "Network Analysis", "value": 1},
                    {"source": "Technical Analysis", "target": "Digital Forensic", "value": 1},
                    {"source": "Technical Analysis", "target": "Reverse Engineering", "value": 1},
                    {
                        "source": "Network Analysis",
                        "target": "Packet Analysis (e.g. Wireshark, Deep Packet Inspection)",
                        "value": 1
                    },
                    {"source": "Network Analysis", "target": "Flow Analysis (e.g. NetFlow, sFlow, IPFIX)", "value": 1},
                    {
                        "source": "Packet Analysis (e.g. Wireshark, Deep Packet Inspection)",
                        "target": "Connections from Unusual Locations",
                        "value": 1
                    },
                    {
                        "source": "Packet Analysis (e.g. Wireshark, Deep Packet Inspection)",
                        "target": "Repeated Login Attempts from Remote Hosts",
                        "value": 1
                    },
                    {
                        "source": "Packet Analysis (e.g. Wireshark, Deep Packet Inspection)",
                        "target": "Repeated Probes of Available Services",
                        "value": 1
                    },
                    {
                        "source": "Packet Analysis (e.g. Wireshark, Deep Packet Inspection)",
                        "target": "Outgoing Connections to Unusual Locations",
                        "value": 1
                    },
                    {"source": "Digital Forensic", "target": "Log Files Analysis", "value": 1},
                    {"source": "Digital Forensic", "target": "Kernel Level Analysis (e.g. Progger)", "value": 1},
                    {
                        "source": "Digital Forensic",
                        "target": "File System Analysis (e.g. Modified, Accessed, Creation of files, Browsing History/Cache)",
                        "value": 1
                    },
                    {
                        "source": "Log Files Analysis",
                        "target": "Missing Logs or Logs with Incorrect Permissions or Ownership",
                        "value": 1
                    },
                    {
                        "source": "Log Files Analysis",
                        "target": "Modifications to System Software and Configuration Files",
                        "value": 1
                    },
                    {"source": "Log Files Analysis", "target": "Arbitrary Data in Log Files", "value": 1},
                    {
                        "source": "File System Analysis (e.g. Modified, Accessed, Creation of files, Browsing History/Cache)",
                        "target": "Presence of New, Unfamiliar Files or Programs",
                        "value": 1
                    },
                    {
                        "source": "File System Analysis (e.g. Modified, Accessed, Creation of files, Browsing History/Cache)",
                        "target": "Changes in File Permissions",
                        "value": 1
                    },
                    {"source": "Reverse Engineering", "target": "Patterns in Binary File Formats", "value": 1},
                    {"source": "Reverse Engineering", "target": "Decompilation of Binary Executables", "value": 1},
                    {"source": "Reverse Engineering", "target": "Black-box Testing of Applications", "value": 1},
                    {"source": "Profiling Attacks", "target": "Indicators of Compromise (IOCs)", "value": 1},
                    {"source": "Indicators of Compromise (IOCs)", "target": "Metadata", "value": 1},
                    {"source": "Indicators of Compromise (IOCs)", "target": "Digital Fingerprint", "value": 1},
                    {"source": "Indicators of Compromise (IOCs)", "target": "Behavioural", "value": 1},
                    {"source": "Metadata", "target": "IP/MAC Address", "value": 1},
                    {"source": "Metadata", "target": "Text Content", "value": 1},
                    {"source": "Metadata", "target": "Email Address", "value": 1},
                    {"source": "Metadata", "target": "Domain Names", "value": 1},
                    {"source": "Digital Fingerprint", "target": "Hash/Message Digest (e.g.MD5, SHA256)", "value": 1},
                    {"source": "Digital Fingerprint", "target": "Digital Watermarking", "value": 1},
                    {"source": "Behavioural", "target": "Combination of Actions & Other Indicators", "value": 1},
                    {"source": "Text Content", "target": "Unusual Graphic Displays or Text Messages", "value": 1},
                    {
                        "source": "Combination of Actions & Other Indicators",
                        "target": "Unfamiliar Processes",
                        "value": 1
                    },
                    {"source": "Legal & Policy", "target": "International", "value": 1},
                    {"source": "Legal & Policy", "target": "National", "value": 1},
                    {"source": "International", "target": "Convention & Regulation", "value": 1},
                    {"source": "International", "target": "Act", "value": 1},
                    {"source": "National", "target": "Convention & Regulation ", "value": 1},
                    {"source": "National", "target": "Act ", "value": 1},
                    {"source": "Convention & Regulation ", "target": "Government", "value": 1},
                    {"source": "Convention & Regulation ", "target": "Industry", "value": 1},
                    {"source": "National", "target": "Bridging Bodies", "value": 1},
                    {"source": "International", "target": "Bridging Bodies", "value": 1},
                    {"source": "Bridging Bodies", "target": "Global", "value": 1},
                    {"source": "Bridging Bodies", "target": "Regional", "value": 1},
                    {"source": "Global", "target": "United Nations Internet Government Forum", "value": 1},
                    {"source": "Global", "target": "INTERPOL", "value": 1},
                    {"source": "Global", "target": "Council of Europe; Conventions on Cybercrime", "value": 1},
                    {"source": "Global", "target": "United Nations Group of Governmental Experts", "value": 1},
                    {"source": "Global", "target": "Forum for Incident Response Security Team (FIRST)", "value": 1},
                    {"source": "Global", "target": "G8 24/7 Cybercrime Network", "value": 1},
                    {
                        "source": "Regional",
                        "target": "Asia Pacfic Computer Emergency Response Team (AP CERT)",
                        "value": 1
                    },
                    {
                        "source": "Regional",
                        "target": "European Network Information Security Agency (ENISA)",
                        "value": 1
                    },
                    {"source": "Regional", "target": "Regional Internet Registries (RIRs)", "value": 1},
                    {"source": "Regional", "target": "Inter-American Cooperation Portal on Cyber-Crime", "value": 1},
                    {"source": "Regional", "target": "NATO", "value": 1},
                    {"source": "Motive", "target": "Ideological", "value": 1},
                    {"source": "Motive", "target": "Financial", "value": 1},
                    {"source": "Motive", "target": "Emotional or Psychological", "value": 1},
                    {"source": "Motive", "target": "Intelligence", "value": 1},
                    {"source": "Motive", "target": "Personal Entertainment", "value": 1},
                    {"source": "Motive", "target": "Service", "value": 1},
                    {"source": "Motive", "target": "Destruction", "value": 1},
                    {"source": "Motive", "target": "Sexual Impulse", "value": 1},
                    {"source": "Motive", "target": "Psychiatric Illness", "value": 1},
                    {"source": "Motive", "target": "Undefined", "value": 1},
                    {"source": "Offender", "target": "Undefined ", "value": 1},
                    {"source": "Offender", "target": "Individual", "value": 1},
                    {"source": "Offender", "target": "Hacktivists", "value": 1},
                    {"source": "Offender", "target": "Country", "value": 1},
                    {"source": "Offender", "target": "Organized Crime", "value": 1},
                    {"source": "Offender", "target": "Terrorist", "value": 1},
                    {"source": "Offender", "target": "Private Sector", "value": 1},
                    {"source": "Individual", "target": "Personal Entertainment", "value": 1},
                    {"source": "Individual", "target": "Emotional or Psychological", "value": 1},
                    {"source": "Individual", "target": "Intelligence", "value": 1},
                    {"source": "Individual", "target": "Ideological", "value": 1},
                    {"source": "Individual", "target": "Financial", "value": 1},
                    {"source": "Individual", "target": "Service", "value": 1},
                    {"source": "Individual", "target": "Destruction", "value": 1},
                    {"source": "Individual", "target": "Sexual Impulse", "value": 1},
                    {"source": "Individual", "target": "Psychiatric Illness", "value": 1},
                    {"source": "Hacktivists", "target": "Emotional or Psychological", "value": 1},
                    {"source": "Hacktivists", "target": "Ideological", "value": 1},
                    {"source": "Organized Crime", "target": "Emotional or Psychological", "value": 1},
                    {"source": "Organized Crime", "target": "Intelligence", "value": 1},
                    {"source": "Organized Crime", "target": "Financial", "value": 1},
                    {"source": "Organized Crime", "target": "Service", "value": 1},
                    {"source": "Organized Crime", "target": "Destruction", "value": 1},
                    {"source": "Country", "target": "Intelligence", "value": 1},
                    {"source": "Country", "target": "Ideological", "value": 1},
                    {"source": "Country", "target": "Financial", "value": 1},
                    {"source": "Country", "target": "Destruction", "value": 1},
                    {"source": "Terrorist", "target": "Emotional or Psychological", "value": 1},
                    {"source": "Terrorist", "target": "Ideological", "value": 1},
                    {"source": "Terrorist", "target": "Financial", "value": 1},
                    {"source": "Terrorist", "target": "Destruction", "value": 1},
                    {"source": "Private Sector", "target": "Emotional or Psychological", "value": 1},
                    {"source": "Private Sector", "target": "Intelligence", "value": 1},
                    {"source": "Private Sector", "target": "Financial", "value": 1},
                    {"source": "Private Sector", "target": "Service", "value": 1},
                    {"source": "Attribution Attack Types", "target": "Advanced Persistent Threat (APT)", "value": 1},
                    {"source": "Attribution Attack Types", "target": "Spyware", "value": 1},
                    {
                        "source": "Attribution Attack Types",
                        "target": "Distributed Denial of Service Attack (DDoS)",
                        "value": 1
                    },
                    {"source": "Attribution Attack Types", "target": "Worm, Virus", "value": 1},
                    {"source": "Attribution Attack Types", "target": "Trojan", "value": 1},
                    {"source": "Attribution Attack Types", "target": "Ransomware", "value": 1},
                    {"source": "Attribution Attack Types", "target": "Social Engineering/Phishing", "value": 1},
                    {"source": "Attribution Attack Types", "target": "Man-in-the-Middle", "value": 1},
                    {"source": "Attribution Attack Types", "target": "Adware", "value": 1},
                    {"source": "Unusual Graphic Displays or Text Messages", "target": "Worm, Virus", "value": 1},
                    {"source": "Unusual Graphic Displays or Text Messages", "target": "Ransomware", "value": 1},
                    {"source": "Unfamiliar Processes", "target": "Advanced Persistent Threat (APT)", "value": 1},
                    {"source": "Unfamiliar Processes", "target": "Spyware", "value": 1},
                    {"source": "Unfamiliar Processes", "target": "Worm, Virus", "value": 1},
                    {"source": "Unfamiliar Processes", "target": "Ransomware", "value": 1},
                    {
                        "source": "Connections from Unusual Locations",
                        "target": "Advanced Persistent Threat (APT)",
                        "value": 1
                    },
                    {"source": "Connections from Unusual Locations", "target": "Ransomware", "value": 1},
                    {
                        "source": "Connections from Unusual Locations",
                        "target": "Social Engineering/Phishing",
                        "value": 1
                    },
                    {"source": "Repeated Login Attempts from Remote Hosts", "target": "Spyware", "value": 1},
                    {"source": "Repeated Login Attempts from Remote Hosts", "target": "Worm, Virus", "value": 1},
                    {
                        "source": "Repeated Probes of Available Services",
                        "target": "Distributed Denial of Service Attack (DDoS)",
                        "value": 1
                    },
                    {"source": "Repeated Probes of Available Services", "target": "Worm, Virus", "value": 1},
                    {"source": "Repeated Probes of Available Services", "target": "Ransomware", "value": 1},
                    {
                        "source": "Outgoing Connections to Unusual Locations",
                        "target": "Advanced Persistent Threat (APT)",
                        "value": 1
                    },
                    {"source": "Outgoing Connections to Unusual Locations", "target": "Spyware", "value": 1},
                    {"source": "Outgoing Connections to Unusual Locations", "target": "Trojan", "value": 1},
                    {
                        "source": "Missing Logs or Logs with Incorrect Permissions or Ownership",
                        "target": "Advanced Persistent Threat (APT)",
                        "value": 1
                    },
                    {
                        "source": "Missing Logs or Logs with Incorrect Permissions or Ownership",
                        "target": "Spyware",
                        "value": 1
                    },
                    {
                        "source": "Modifications to System Software and Configuration Files",
                        "target": "Advanced Persistent Threat (APT)",
                        "value": 1
                    },
                    {
                        "source": "Modifications to System Software and Configuration Files",
                        "target": "Spyware",
                        "value": 1
                    },
                    {
                        "source": "Modifications to System Software and Configuration Files",
                        "target": "Worm, Virus",
                        "value": 1
                    },
                    {
                        "source": "Modifications to System Software and Configuration Files",
                        "target": "Ransomware",
                        "value": 1
                    },
                    {
                        "source": "Arbitrary Data in Log Files",
                        "target": "Distributed Denial of Service Attack (DDoS)",
                        "value": 1
                    },
                    {
                        "source": "Presence of New, Unfamiliar Files or Programs",
                        "target": "Advanced Persistent Threat (APT)",
                        "value": 1
                    },
                    {"source": "Presence of New, Unfamiliar Files or Programs", "target": "Spyware", "value": 1},
                    {"source": "Presence of New, Unfamiliar Files or Programs", "target": "Worm, Virus", "value": 1},
                    {
                        "source": "Presence of New, Unfamiliar Files or Programs",
                        "target": "Social Engineering/Phishing",
                        "value": 1
                    },
                    {"source": "Changes in File Permissions", "target": "Advanced Persistent Threat (APT)", "value": 1},
                    {"source": "Changes in File Permissions", "target": "Worm, Virus", "value": 1},
                    {"source": "Changes in File Permissions", "target": "Social Engineering/Phishing", "value": 1},
                    {"source": "Advanced Persistent Threat (APT)", "target": "Financial", "value": 1},
                    {"source": "Advanced Persistent Threat (APT)", "target": "Intelligence", "value": 1},
                    {"source": "Advanced Persistent Threat (APT)", "target": "Destruction", "value": 1},
                    {"source": "Spyware", "target": "Financial", "value": 1},
                    {"source": "Spyware", "target": "Emotional or Psychological", "value": 1},
                    {"source": "Spyware", "target": "Intelligence", "value": 1},
                    {"source": "Spyware", "target": "Personal Entertainment", "value": 1},
                    {"source": "Spyware", "target": "Service", "value": 1},
                    {"source": "Spyware", "target": "Sexual Impulse", "value": 1},
                    {"source": "Spyware", "target": "Psychiatric Illness", "value": 1},
                    {"source": "Distributed Denial of Service Attack (DDoS)", "target": "Ideological", "value": 1},
                    {"source": "Distributed Denial of Service Attack (DDoS)", "target": "Financial", "value": 1},
                    {
                        "source": "Distributed Denial of Service Attack (DDoS)",
                        "target": "Emotional or Psychological",
                        "value": 1
                    },
                    {
                        "source": "Distributed Denial of Service Attack (DDoS)",
                        "target": "Personal Entertainment",
                        "value": 1
                    },
                    {"source": "Distributed Denial of Service Attack (DDoS)", "target": "Service", "value": 1},
                    {"source": "Distributed Denial of Service Attack (DDoS)", "target": "Destruction", "value": 1},
                    {
                        "source": "Distributed Denial of Service Attack (DDoS)",
                        "target": "Psychiatric Illness",
                        "value": 1
                    },
                    {"source": "Worm, Virus", "target": "Ideological", "value": 1},
                    {"source": "Worm, Virus", "target": "Financial", "value": 1},
                    {"source": "Worm, Virus", "target": "Emotional or Psychological", "value": 1},
                    {"source": "Worm, Virus", "target": "Personal Entertainment", "value": 1},
                    {"source": "Worm, Virus", "target": "Destruction", "value": 1},
                    {"source": "Worm, Virus", "target": "Psychiatric Illness", "value": 1},
                    {"source": "Worm, Virus", "target": "Sexual Impulse", "value": 1},
                    {"source": "Trojan", "target": "Ideological", "value": 1},
                    {"source": "Trojan", "target": "Financial", "value": 1},
                    {"source": "Trojan", "target": "Emotional or Psychological", "value": 1},
                    {"source": "Trojan", "target": "Intelligence", "value": 1},
                    {"source": "Trojan", "target": "Personal Entertainment", "value": 1},
                    {"source": "Trojan", "target": "Service", "value": 1},
                    {"source": "Trojan", "target": "Destruction", "value": 1},
                    {"source": "Trojan", "target": "Sexual Impulse", "value": 1},
                    {"source": "Trojan", "target": "Psychiatric Illness", "value": 1},
                    {"source": "Ransomware", "target": "Financial", "value": 1},
                    {"source": "Ransomware", "target": "Emotional or Psychological", "value": 1},
                    {"source": "Ransomware", "target": "Service", "value": 1},
                    {"source": "Ransomware", "target": "Destruction", "value": 1},
                    {"source": "Ransomware", "target": "Psychiatric Illness", "value": 1},
                    {"source": "Social Engineering/Phishing", "target": "Financial", "value": 1},
                    {"source": "Social Engineering/Phishing", "target": "Emotional or Psychological", "value": 1},
                    {"source": "Social Engineering/Phishing", "target": "Intelligence", "value": 1},
                    {"source": "Social Engineering/Phishing", "target": "Service", "value": 1},
                    {"source": "Social Engineering/Phishing", "target": "Psychiatric Illness", "value": 1},
                    {"source": "Man-in-the-Middle", "target": "Financial", "value": 1},
                    {"source": "Man-in-the-Middle", "target": "Emotional or Psychological", "value": 1},
                    {"source": "Man-in-the-Middle", "target": "Intelligence", "value": 1},
                    {"source": "Man-in-the-Middle", "target": "Personal Entertainment", "value": 1},
                    {"source": "Man-in-the-Middle", "target": "Psychiatric Illness", "value": 1},
                    {"source": "Adware", "target": "Financial", "value": 1},
                    {"source": "Adware", "target": "Emotional or Psychological", "value": 1},
                    {"source": "Adware", "target": "Intelligence", "value": 1},
                    {"source": "Adware", "target": "Service", "value": 1},
                    {"source": "Adware", "target": "Psychiatric Illness", "value": 1},
                ]
            });
    };
    // loadMiserables.description = "<em>Les Miserables</em> data (<a href='https://bl.ocks.org/mbostock/4062045'>4062045</a>)";

    //

    const loadBlocks = function (Graph) {
        qwest.get('.blocks.json').then((_, data) => {
            data.nodes.forEach(node => {
                node.name = `${node.user ? node.user + ': ' : ''}${node.description || node.id}`
            });

            Graph
                .cooldownTicks(300)
                .cooldownTime(20000)
                .autoColorBy('user')
                .forceEngine('ngraph')
                .graphData(data);
        });
    };
    loadBlocks.description = "<em>Blocks</em> data (<a href='https://bl.ocks.org/mbostock/afecf1ce04644ad9036ca146d2084895'>afecf1ce04644ad9036ca146d2084895</a>)";

    //

    const loadD3Dependencies = function (Graph) {
        qwest.get('.d3.csv').then((_, csvData) => {
            const {data: [, ...data]} = Papa.parse(csvData); // Parse csv
            data.pop(); // Remove last empty row

            const nodes = [], links = [];
            data.forEach(([size, path]) => {
                const levels = path.split('/'),
                    module = levels.length > 1 ? levels[1] : null,
                    leaf = levels.pop(),
                    parent = levels.join('/');

                nodes.push({
                    path,
                    leaf,
                    module,
                    size: +size || 1
                });

                if (parent) {
                    links.push({source: parent, target: path});
                }
            });

            Graph
                .cooldownTicks(300)
                .nodeRelSize(0.5)
                .nodeId('path')
                .nodeVal('size')
                .nodeLabel('path')
                .autoColorBy('module')
                .forceEngine('ngraph')
                .graphData({nodes: nodes, links: links});
        });
    };
    loadD3Dependencies.description = "<em>D3 dependencies</em> data (<a href='https://bl.ocks.org/mbostock/9a8124ccde3a4e9625bc413b48f14b30'>9a8124ccde3a4e9625bc413b48f14b30</a>)";

    const tunnel = function (Graph) {

        const perimeter = 12, length = 30;

        const getId = (col, row) => `${col},${row}`;

        let nodes = [], links = [];
        for (let colIdx = 0; colIdx < perimeter; colIdx++) {
            for (let rowIdx = 0; rowIdx < length; rowIdx++) {
                const id = getId(colIdx, rowIdx);
                nodes.push({id});

                // Link vertically
                if (rowIdx > 0) {
                    links.push({source: getId(colIdx, rowIdx - 1), target: id});
                }

                // Link horizontally
                links.push({source: getId((colIdx || perimeter) - 1, rowIdx), target: id});
            }
        }

        Graph
            .cooldownTicks(300)
            .forceEngine('ngraph')
            .graphData({nodes: nodes, links: links});
    };
    tunnel.description = "fabric data for a cylindrical tunnel shape";

    //

    return [loadSecurityAttribution, loadBlocks, loadD3Dependencies, tunnel];
}