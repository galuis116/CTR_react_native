const quotes = [
    {
        month : 1,
        quotes : [
            {
                day : 1,
                title : "CHOOSE THE RIGHT ",
                name : "2 Nephi 25:29",
                quote : "And now behold, I say unto you that the right way is to believe in Christ, and deny him not; and Christ is the holy one of Israel; wherefore ye must bow down before him, and worship him with all your might, mind, and strength, and your whole soul; and if ye do this ye shall in nowise be cast out.",    
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/25.p29#p29"
            },
            {
                day : 2,
                title : "COMMITTEMENT TEACHES RESPONSIBILITY",
                name : "Jacob 1:19",
                quote : "And we did magnify our office unto the Lord, taking upon us the responsibility, answering the sins of the people upon our own heads if we did not teach them the word of God with all diligence…",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/jacob/1.p19#p19"    
            },
            {
                day : 3,
                title : "CHOOSE TO REPENT",
                name : "Alma 13:10",
                quote : "Now, as I said concerning the holy order, or this high priesthood, there were many who were ordained and became high priests of God; and it was on account of their exceeding faith and repentance, and their righteousness before God, they choosing to repent and work righteousness rather than to perish.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/13.p10#p10"    
            },
            {
                day : 4,
                title : "CONFIDENCE THROUGH RIGHTEOUSNESS",
                name : "D&C 121:45",
                quote : "Let thy bowels also be full of charity towards all men, and to the household of faith, and let virtue garnish thy thoughts unceasingly; then shall thy confidence wax strong in the presence of God; and the doctrine of the priesthood shall distil upon thy soul as the dews from heaven.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/121.p45#p45",    
            },
            {
                day : 5,
                title : "CHOOSE TO RISK ",
                name : "John 15:19",
                quote : "If ye were of the world, the world would love his own: but because ye are not of the world, but I have chosen you out of the world, therefore the world hateth you.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/nt/john/15.p19#p19",    
            },
            {
                day : 6,
                title : "CHOOSE TO RE-EVALUATE ",
                name : "2 Nephi 33:10",
                quote : "And now, my beloved brethren, and also Jew, and all ye ends of the earth, hearken unto these words and believe in Christ; and if ye believe not in these words believe in Christ. And if ye shall believe in Christ ye will believe in these words, for they are the words of Christ, and he hath given them unto me; and they teach all men that they should do good.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/33.p10#p10",    
            },
            {
                day : 7,
                title : "CAPABLE THROUGH RIGHTEOUSNESS",
                name : "3 Nephi 21:10",
                quote : "But behold, the life of my servant shall be in my hand; therefore they shall not hurt him, although he shall be marred because of them. Yet I will heal him, for I will show unto them that my wisdom is greater than the cunning of the devil." ,
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/21.p10#p10",   
            },
            {
                day : 8,
                title : "COME TO REALIZE",
                name : "Moses 1:10",
                quote : "And it came to pass that it was for the space of many hours before Moses did again receive his natural strength like unto man; and he said unto himself: Now, for this cause I know that man is nothing, which thing I never had supposed.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/pgp/moses/1.p10#p10"    
            },
            {
                day : 9,
                title : "CHOOSE TO REDISCOVER",
                name : "Enos 1:3",
                quote : "Behold, I went to hunt beasts in the forests; and the words which I had often heard my father speak concerning eternal life, and the joy of the saints, sunk deep into my heart.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/enos/1.p3#p3"    
            },
            {
                day : 10,
                title : "CHOOSE TEMPLE RIGHTEOUSNESS",
                name : "Alma 34:36",
                quote : "And this I know, because the Lord hath said he dwelleth not in unholy temples, but in the hearts of the righteous doth he dwell; yea, and he has also said that the righteous shall sit down in his kingdom, to go no more out; but their garments should be made white through the blood of the Lamb.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/34.p36#p36"    
            },
            {
                day : 11,
                title : "CREATE TOTAL REALNESS",
                name : "D&C 64:22",
                quote : "And after that day, I, the Lord, will not hold any guilty that shall go with an open heart up to the land of Zion; for I, the Lord, require the hearts of the children of men.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/64.p22#p22",    
            },

            {
                day : 12,
                title : "COMMITMENT TAKES RISK ",
                name : "Alma 24:18",
                quote : "And this they did, it being in their view a testimony to God, and also to men, that they never would use weapons again for the shedding of man’s blood; and this they did, vouching and covenanting with God, that rather than shed the blood of their brethren they would give up their own lives…",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/24.p18#p18",    

            },
            {
                day : 13,
                title : "CHOOSE TO RECOLATE",
                name : "1 Nephi 2:2",
                quote : "And it came to pass that the Lord commanded my father, even in a dream, that he should take his family and depart into the wilderness.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/1-ne/2.p2#p2",    

            },
            {
                day : 14,
                title : "CLEAR TRITE REBUTTALS",
                name : "Matthew 18:15",
                quote : "Moreover if thy brother shall trespass against thee, go and tell him his fault between thee and him alone: if he shall hear thee, thou hast gained thy brother.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/nt/matt/18.p15#p15",    

            },
            {
                day : 15,
                title : "CASTAWAY TRITE REASONING",
                name : "Isaiah 29:14",
                quote : "Therefore, behold, I will proceed to do a marvellous work among this people, even a marvellous work and a wonder: for the wisdom of their wise men shall perish, and the understanding of their prudent men shall be hid.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/ot/isa/29.p14#p14",    

            },
            {
                day : 16,
                title : "CELESTIALIZE THY RESULTS",
                name : "D&C 76:69",
                quote : "These are they who are just men made perfect through Jesus the mediator of the new covenant, who wrought out this perfect atonement through the shedding of his own blood.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/76.p69#p69",    

            },
            {
                day : 17,
                title : "CREATIVE THOUGHTS RESULT",
                name : "Prov. 23:7",
                quote : "For as he thinketh in his heart, so is he…",
                link : "https://www.churchofjesuschrist.org/study/scriptures/ot/prov/23.p7#p7",    

            },
            {
                day : 18,
                title : "CONVERT TO REBUILDING",
                name : "James 5:20",
                quote : "Let him know, that he which converteth the sinner from the error of his way shall save a soul from death, and shall hide a multitude of sins.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/nt/james/5.p20#p20",    

            },
            {
                day : 19,
                title : "COUNSEL TO REPLENISH",
                name : "Luke 22:32",
                quote : "But I have prayed for thee, that thy faith fail not: and when thou art converted, strengthen thy brethren.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/nt/luke/22.p32#p32",    

            },
            {
                day : 20,
                title : "CHOOSE THE ROAD",
                name : "Matthew 7:13-14",
                quote : `13. Enter ye in at the strait gate: for wide is the gate, and broad is the way, that leadeth to destruction, and many there be which go in thereat:
                14. Because strait is the gate, and narrow is the way, which leadeth unto life, and few there be that find it.`,
                link : "https://www.churchofjesuschrist.org/study/scriptures/nt/matt/7.p13-p14#p13",    

            },
            {
                day : 21,
                title : "CELESTIALIZE THROUGH REFINEMENT",
                name : "D&C 76:51-52",
                quote : `51. They are they who received the testimony of Jesus, and believed on his name and were baptized… 52. That by keeping the commandments they might be washed and cleansed from all their sins, and receive the Holy Spirit by the laying on of the hands of him who is ordained and sealed unto this power`,
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/76.p51-p52#p51",    

            },
            {
                day : 22,
                title : "CHOOSE TO REMOVE",
                name : "Helaman 5:11",
                quote : "And he hath power given unto him from the Father to redeem them from their sins because of repentance; therefore he hath sent his angels to declare the tidings of the conditions of repentance, which bringeth unto the power of the Redeemer, unto the salvation of their souls.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/hel/5.p11#p11",    

            },
            {
                day : 23,
                title : "CHALLENGES TEACH REFINEMENT",
                name : "D&C 136:31",
                quote : "My people must be tried in all things, that they may be prepared to receive the glory that I have for them, even the glory of Zion; and he that will not bear chastisement is not worthy of my kingdom.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/136.p31#p31",    

            },
            {
                day : 24,
                title : "CHARACTER THROUGH RIGHTEOUSNESS",
                name : "Job 2:3",
                quote : "And the Lord said unto Satan, Hast thou considered my servant Job, that there is none like him in the earth, a perfect and an upright man, one that feareth God, and escheweth evil? and still he holdeth fast his integrity, although thou movedst me against him, to destroy him without cause.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/ot/job/2.p3#p3",    

            },
            {
                day : 25,
                title : "CLOTHE THYSELF RIGHT",
                name : "2 Nephi 9:14",
                quote : "Wherefore, we shall have a perfect knowledge of all our guilt, and our uncleanness, and our nakedness; and the righteous shall have a perfect knowledge of their enjoyment, and their righteousness, being clothed with purity, yea, even with the robe of righteousness.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/9.p14#p14",    

            },
            {
                day : 26,
                title : "CONFIDENCE THROUGH RIGHTEOUSNESS",
                name : "Eph. 3:12",
                quote : "In whom we have boldness and access with confidence by the faith of him." ,
                link : "https://www.churchofjesuschrist.org/study/scriptures/nt/eph/3.p12#p12",    

            },
            {
                day : 27,
                title : "CHOOSE TABERNACLE REALMS",
                name : "Rev. 21:3",
                quote : "And I heard a great voice out of heaven saying, Behold, the tabernacle of God is with men, and he will dwell with them, and they shall be his people, and God himself shall be with them, and be their God." ,
                link : "https://www.churchofjesuschrist.org/study/scriptures/nt/rev/21.p3#p3",    

            },
            {
                day : 28,
                title : "CONSIDER TALENTS REWARDING",
                name : "D&C 82:18",
                quote : "And all this for the benefit of the church of the living God, that every man may improve upon his talent, that every man may gain other talents, yea, even an hundred fold, to be cast into the Lord’s storehouse, to become the common property of the whole church." ,
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/82.p18#p18",    

            },
            {
                day : 29,
                title : "CORRECT TEACHINGS REPLENISH ",
                name : "D&C 50:22",
                quote : "Wherefore, he that preacheth and he that receiveth, understand one another, and both are edified and rejoice together.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/50.p22#p22",    

            },
            {
                day : 30,
                title : "CHOOSE TODAY RIGHTEOUSNESS",
                name : "Joshua 24:15",
                quote : "And if it seem evil unto you to serve the Lord, choose you this day whom ye will serve;…but as for me and my house, we will serve the Lord.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/ot/josh/24.p15#p15",    

            },
            {
                day : 31,
                title : "COMMITTED TO REACHOUT",
                name : "D&C 18:15",
                quote : "And if it so be that you should labor all your days in crying repentance unto this people, and bring, save it be one soul unto me, how great shall be your joy with him in the kingdom of my Father!",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/18.p15#p15",    

            },
        ]
    },
    {
        month : 2,
        quotes : [
            {
                day : 1,
                title : "CHOOSE TEMPLE RELATIONSHIPS",
                name : "D&C 132:7",
                quote : "And verily I say unto you, that the conditions of this law are these: All covenants, contracts, bonds, obligations, oaths, vows, performances, connections, associations, or expectations, that are not made and entered into and sealed by the Holy Spirit of promise, of him who is anointed, both as well for time and for all eternity...",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/132.p7#p7" 
            },
            {
                day : 2,
                title : "CHARITY TRULY RETURNS ",
                name : "Moroni 7:47",
                quote : "But charity is the pure love of Christ, and it endureth forever; and whoso is found possessed of it at the last day, it shall be well with him.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/moro/7.p47#p47"    
            },
            {
                day : 3,
                title : "COUPLES TRULY RISK",
                name : "JSH 1:58",
                quote : "Owing to my continuing to assert that I had seen a vision, persecution still followed me, and my wife’s father’s family were very much opposed to our being married. I was, therefore, under the necessity of taking her elsewhere…",
                link :"https://www.churchofjesuschrist.org/study/scriptures/pgp/js-h/1.p58#p58"    
            },
            {
                day : 4,
                title : "CHOOSE TO REVEAL",
                name : "Acts 5:32",
                quote : "And we are his witnesses of these things; and so is also the Holy Ghost, whom God hath given to them that obey him.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/nt/acts/5.p32#p32"    
            },
            {
                day : 5,
                title : "CLEANSE TOUGH REACTIONS",
                name : "Alma 12:7",
                quote : "Now when Alma had spoken these words, Zeezrom began to tremble more exceedingly, for he was convinced more and more of the power of God; and he was also convinced that Alma and Amulek had a knowledge of him, for he was convinced that they knew the thoughts and intents of his heart; for power was given unto them that they might know of these things according to the spirit of prophecy.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/12.p7#p7"    
            },
            {
                day : 6,
                title : "COMMUNICATE TO REBUILD",
                name : "Jude 1:20",
                quote : "But ye, beloved, building up yourselves on your most holy faith, praying in the Holy Ghost.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/nt/jude/1.p20#p20"    
            },
            {
                day : 7,
                title : "COME TO REMAIN",
                name : "D&C 84:61",
                quote : "For I will forgive you of your sins with this commandment—that you remain steadfast in your minds in solemnity and the spirit of prayer, in bearing testimony to all the world of those things which are communicated unto you.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/84.p61#p61"    
            },
            {
                day : 8,
                title : "CLARITY THROUGH REPENTANCE",
                name : "John 8:32",
                quote : "And ye shall know the truth, and the truth shall make you free.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/nt/john/8.p32#p32"    
            },
            {
                day : 9,
                title : "CREATE TEMPERATE REACTIONS",
                name : "1 Cor. 9:25",
                quote : "And every man that striveth for the mastery is temperate in all things...",
                link : "https://www.churchofjesuschrist.org/study/scriptures/nt/1-cor/9.p25#p25"    
            },
            {
                day : 10,
                title : "CONSIDER TOOL REBUILDING",
                name : "1 Nephi 17:9",
                quote : "And I said: Lord, whither shall I go that I may find ore to molten, that I may make tools to construct the ship after the manner which thou hast shown unto me?",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/1-ne/17.p9#p9"    
            },
            {
                day : 11,
                title : "CARRYING THE RESPONSIBILITY",
                name : "Jacob 1:19",
                quote : "And we did magnify our office unto the Lord, taking upon us the responsibility, answering the sins of the people upon our own heads if we did not teach them the word of God with all diligence...",
                link : 'https://www.churchofjesuschrist.org/study/scriptures/bofm/jacob/1.p19#p19'    
            },
            {
                day : 12,
                title : "CELESTIAL THOUGHTS REDEEM",
                name : "Jacob 2:17",
                quote : "Think of your brethren like unto yourselves, and be familiar with all and free with your substance, that they may be rich like unto you.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/jacob/2.p17#p17"    
            },
            {
                day : 13,
                title : "COMPELLED THROUGH READING",
                name : "JSH 1:12",
                quote : "Never did any passage of scripture come with more power to the heart of man than this did at this time to mine. It seemed to enter with great force into every feeling of my heart. I reflected on it again and again, knowing that if any person needed wisdom from God, I did...",
                link : "https://www.churchofjesuschrist.org/study/scriptures/pgp/js-h/1.p12#p12"    
            },
            {
                day : 14,
                title : "CORRECT TEACHINGS REDEEM",
                name : "D&C 93:19",
                quote : "I give unto you these sayings that you may understand and know how to worship, and know what you worship, that you may come unto the Father in my name, and in due time receive of his fulness.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/93.p19#p19"    
            },
            {
                day : 15,
                title : "COPY THE RIGHTEOUS",
                name : "Alma 39:1",
                quote : "And now, my son, I have somewhat more to say unto thee than what I said unto thy brother; for behold, have ye not observed the steadiness of thy brother, his faithfulness, and his diligence in keeping the commandments of God? Behold, has he not set a good example for thee?",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/39.p1#p1"    
            },
            {
                day : 16,
                title : "CHOOSE TOGETHER RIGHTEUOSNESS",
                name : "Moses 5:11-12",
                quote : "11…and the joy of our redemption, and the eternal life which God giveth unto all the obedient.12 And Adam and Eve blessed the name of God...",
                link : "https://www.churchofjesuschrist.org/study/scriptures/pgp/moses/5.p11-p12#p11"    
            },
            {
                day : 17,
                title : "COME THOU REPENTANT",
                name : "2 Nephi 28:32",
                quote : "…nevertheless, I will be merciful unto them, saith the Lord God, if they will repent and come unto me; for mine arm is lengthened out all the day long, saith the Lord God of Hosts." ,
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/28.p32#p32"   
            },
            {
                day : 18,
                title : "COMPANIONS THAT REJUVANAT",
                name : "Alma 15:18",
                quote : "Now as I said, Alma having seen all these things, therefore he took Amulek and came over to the land of Zarahemla, and took him to his own house, and did administer unto him in his tribulations, and strengthened him in the Lord.",
                link : 'https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/15.p18#p18'    
            },
            {
                day : 19,
                title : "CHANNEL THY REDEEMER",
                name : "3 Nephi 13:22",
                quote : "The light of the body is the eye; if, therefore, thine eye be single, thy whole body shall be full of light.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/13.p22#p22"    
            },
            {
                day : 20,
                title : "CHILDREN TEACH REALNESS",
                name : "Mosiah 3:19",
                quote : "…becometh as a child, submissive, meek, humble, patient, full of love, willing to submit to all things which the Lord seeth fit to inflict upon him, even as a child doth submit to his father.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/3.p19#p19"    
            },
            {
                day : 21,
                title : "CONTINUE TRUSTING RIGHTEOUSNESS",
                name : "D&C 11:12",
                quote : "And now, verily, verily, I say unto thee, put your trust in that Spirit which leadeth to do good—yea, to do justly, to walk humbly, to judge righteously; and this is my Spirit.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/11.p12#p12"    
            },
            {
                day : 22,
                title : "CONDUCT THROUGH RIGHTEUOSNESS",
                name : "D&C 121:45",
                quote : "Let thy bowels also be full of charity towards all men, and to the household of faith, and let virtue garnish thy thoughts unceasingly; then shall thy confidence wax strong in the presence of God; and the doctrine of the priesthood shall distil upon thy soul as the dews from heaven.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/121.p45#p45"    
            },
            {
                day : 23,
                title : "COMPLIMENT THROUGH REALNESS",
                name : "Genesis 33:10",
                quote : "And Jacob said, Nay, I pray thee, if now I have found grace in thy sight, then receive my present at my hand: for therefore I have seen thy face, as though I had seen the face of God, and thou wast pleased with me.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/33.p10#p10"    
            },
            {
                day : 24,
                title : "CONVERSE TO REVEAL",
                name : "D&C 42:61",
                quote : "If thou shalt ask, thou shalt receive revelation upon revelation, knowledge upon knowledge, that thou mayest know the mysteries and peaceable things—that which bringeth joy, that which bringeth life eternal.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/42.p61#p61"    
            },
            {
                day : 25,
                title : "CHARITY THOUGH REBELLED",
                name : "2 Nephi 27:35",
                quote : "They also that erred in spirit shall come to understanding, and they that murmured shall learn doctrine.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/27.p35#p35"    
            },
            {
                day : 26,
                title : "COMMUNING TOGETHER REWARDS",
                name : "Mosiah 18:21",
                quote : "And he commanded them that there should be no contention one with another, but that they should look forward with one eye, having one faith and one baptism, having their hearts knit together in unity and in love one towards another.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/18.p21#p21"    
            },
            {
                day : 27,
                title : "CAUSED TREMBLING REACTIONS",
                name : "Mosiah 28:3",
                quote : "Now they were desirous that salvation should be declared to every creature, for they could not bear that any human soul should perish; yea, even the very thoughts that any soul should endure endless torment did cause them to quake and tremble.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/28.p3#p3"    
            },
            {
                day : 28,
                title : "CAN’T TEMPORALLY REDEEM",
                name : "2 Cor. 4:18",
                quote : "While we look not at the things which are seen, but at the things which are not seen: for the things which are seen are temporal; but the things which are not seen are eternal.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/nt/2-cor/4.p18#p18"    
            },
            {
                day : 29,
                title : "CAN’T TEMPORALLY REDEEM",
                name : "2 Cor. 4:18",
                quote : "While we look not at the things which are seen, but at the things which are not seen: for the things which are seen are temporal; but the things which are not seen are eternal.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/nt/2-cor/4.p18#p18"    
            },
            
        ]
    },
    {
        month : 3,
        quotes : [
            {
                day : 1,
                title : "CHOOSE TO RECOVER",
                name : "D&C 39:11",
                quote : "And if thou do this, I have prepared thee for a greater work. Thou shalt preach the fulness of my gospel, which I have sent forth in these last days, the covenant which I have sent forth to recover my people, which are of the house of Israel.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/39.p11#p11"    
            },
            {
                day : 2,
                title : "COMMIT TO REACHOUT",
                name : "Matthew 25:40",
                quote : "And the King shall answer and say unto them, Verily I say unto you, Inasmuch as ye have done it unto one of the least of these my brethren, ye have done it unto me.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/nt/matt/25.p40#p40"    
            },
            {
                day : 3,
                title : "COME TO RULE",
                name : "D&C 132:20",
                quote : "Then shall they be gods, because they have no end; therefore shall they be from everlasting to everlasting, because they continue; then shall they be above all, because all things are subject unto them. Then shall they be gods, because they have all power, and the angels are subject unto them.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/132.p20#p20"    
            },
            {
                day : 4,
                title : "CLEAVE UNTO RIGHTEOUSNESS",
                name : "Moroni 7:28",
                quote : "…and they who have faith in him will cleave unto every good thing; wherefore he advocateth the cause of the children of men; and he dwelleth eternally in the heavens.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/moro/7.p28#p28"    
            },
            {
                day : 5,
                title : "CONSECRATE THY REPENTANCE",
                name : "Moses 5:8",
                quote : "Wherefore, thou shalt do all that thou doest in the name of the Son, and thou shalt repent and call upon God in the name of the Son forevermore.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/pgp/moses/5.p8#p8"    
            },
            {
                day : 6,
                title : "CONVERT THY REMNANT",
                name : "3 Nephi 5:23",
                quote : "Yea, and surely shall he again bring a remnant of the seed of Joseph to the knowledge of the Lord their God.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/5.p23#p23"    
            },
            {
                day : 7,
                title : "CHASTENING TEACHES RESPECT",
                name : "D&C 103:4",
                quote : "And that those who call themselves after my name might be chastened for a little season with a sore and grievous chastisement, because they did not hearken altogether unto the precepts and commandments which I gave unto them.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/103.p4#p4"    
            },
            {
                day : 8,
                title : "CHASTE THOUGHTS REDEEM",
                name : "D&C 121:45",
                quote : "Let thy bowels also be full of charity towards all men, and to the household of faith, and let virtue garnish thy thoughts unceasingly...",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/121.p45#p45"    
            },
            {
                day : 9,
                title : "CHOOSE TREASURES REDEEMABLE",
                name : "3 Nephi 13:33",
                quote : "But seek ye first the kingdom of God and his righteousness, and all these things shall be added unto you.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/13.p33#p33"    
            },
            {
                day : 10,
                title : "CHERISH TEMPLE RECOMMEND",
                name : "D&C 110:9",
                quote : "Yea the hearts of thousands and tens of thousands shall greatly rejoice in consequence of the blessings which shall be poured out, and the endowment with which my servants have been endowed in this house." ,
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/110.p9#p9"   
            },
            {
                day : 11,
                title : "COPY THE REDEEMER",
                name : "2 Nephi 31:12",
                quote : "And also, the voice of the Son came unto me, saying: He that is baptized in my name, to him will the Father give the Holy Ghost, like unto me; wherefore, follow me, and do the things which ye have seen me do.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/31.p12#p12"    
            },
            {
                day : 12,
                title : "COMMITTO RELIVE",
                name : "Alma 5:14",
                quote : "And now behold, I ask of you, my brethren of the church, have ye spiritually been born of God? Have ye received his image in your countenances? Have ye experienced this mighty change in your hearts?",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/5.p14#p14"    
            },
            {
                day : 13,
                title : "CONSISTENTLY TRUST REPENTANCE",
                name : "Alma 26:22",
                quote : "Yea, he that repenteth and exerciseth faith, and bringeth forth good works, and prayeth continually without ceasing—unto such it is given to know the mysteries of God…",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/26.p22#p22"    
            },
            {
                day : 14,
                title : "CAUTION THY REBELLION",
                name : "2 Nephi 28:8-9",
                quote : "8 And there shall also be many which shall say: Eat, drink, and be merry; nevertheless, fear God—he will justify in committing a little sin… 9 Yea, and there shall be many which shall teach after this manner, false and vain and foolish doctrines…",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/28.p8-p9#p8"    
            },
            {
                day : 15,
                title : "COMMAND THY RESPECT",
                name : "Alma 60:36",
                quote : "Behold, I am Moroni, your chief captain. I seek not for power, but to pull it down. I seek not for honor of the world, but for the glory of my God, and the freedom and welfare of my country…",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/60.p36#p36"    
            },
            {
                day : 16,
                title : "COME TO REJOICE",
                name : "Mosiah 5:4",
                quote : "And it is the faith which we have had on the things which our king has spoken unto us that has brought us to this great knowledge, whereby we do rejoice with such exceedingly great joy.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/5.p4#p4"    
            },
            {
                day : 17,
                title : "CREATE TALENTS RIGHTEOUSLY",
                name : "Matthew 25:21",
                quote : "…Well done, thou good and faithful servant: thou hast been faithful over a few things, I will make thee ruler over many things: enter thou into the joy of thy lord.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/nt/matt/25.p21#p21"    
            },
            {
                day : 18,
                title : "CONTINUE TEMPLE RENEWAL",
                name : "D&C 109:15",
                quote : "And that they may grow up in thee, and receive a fulness of the Holy Ghost, and be organized according to thy laws, and be prepared to obtain every needful thing;",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/109.p15#p15"    
            },
            {
                day : 19,
                title : "ONTINUE TRUSTING REGARDLESS",
                name : "1 Nephi 4:13",
                quote : "Behold the Lord slayeth the wicked to bring forth his righteous purposes. It is better that one man should perish than that a nation should dwindle and perish in unbelief.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/1-ne/4.p13#p13"    
            },
            {
                day : 20,
                title : "CHRIST TAUGHT RENEWAL",
                name : "2 Nephi 31:5",
                quote : "And now, if the Lamb of God, he being holy, should have need to be baptized by water, to fulfil all righteousness, O then, how much more need have we, being unholy, to be baptized, yea, even by water!",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/31.p5#p5"    
            },
            {
                day : 21,
                title : "CAN’T TRAVEL RAPIDLY",
                name : "Mosiah 4:27",
                quote : "And see that all these things are done in wisdom and order; for it is not requisite that a man should run faster than he has strength…",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/4.p27#p27"    
            },
            {
                day : 22,
                title : "CALLED THROUGH REDEEMER",
                name : "Mosiah 5:7",
                quote : "And now, because of the covenant which ye have made ye shall be called the children of Christ, his sons, and his daughters; for behold, this day he hath spiritually begotten you; for ye say that your hearts are changed through faith on his name; therefore, ye are born of him and have become his sons and his daughters." ,
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/5.p7#p7"   
            },
            {
                day : 23,
                title : "CLEANSING TAKES REAL EFFORT",
                name : "Alma 5:27",
                quote : "Have ye walked, keeping yourselves blameless before God? Could ye say, if ye were called to die at this time, within yourselves, that ye have been sufficiently humble? That your garments have been cleansed and made white through the blood of Christ, who will come to redeem his people from their sins?",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/5.p27#p27"    
            },
            {
                day : 24,
                title : "COUNSEL THROUGH RESPONSIBILITY",
                name : "Alma 17:18",
                quote : "Now Ammon being the chief among them, or rather he did administer unto them, and he departed from them, after having blessed them according to their several stations, having imparted the word of God unto them, or administered unto them before his departure...",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/17.p18#p18"    
            },
            {
                day : 25,
                title : "CHOOSE TO RENDER",
                name : "Alma 30:9",
                quote : "Now if a man desired to serve God, it was his privilege; or rather, if he believed in God it was his privilege to serve him...",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/30.p9#p9"    
            },
            {
                day : 26,
                title : "CONFIRMED THROUGH REDEEMER",
                name : "Alma 44:4",
                quote : "Now ye see that this is the true faith of God; yea, ye see that God will support, and keep, and preserve us, so long as we are faithful unto him, and unto our faith, and our religion; and never will the Lord suffer that we shall be destroyed except we should fall into transgression and deny our faith.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/44.p4#p4"    
            },
            {
                day : 27,
                title : "CONVINCED THROUGH READING",
                name : "Hel. 15:7",
                quote : "And behold, ye do know of yourselves, for ye have witnessed it, that as many of them as are brought to the knowledge of the truth, and to know of the wicked and abominable traditions of their fathers, and are led to believe the holy scriptures, yea, the prophecies of the holy prophets, which are written, which leadeth them to faith on the Lord, and unto repentance, which faith and repentance bringeth a change of heart unto them.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/hel/15.p7#p7"    
            },
            {
                day : 28,
                title : "COMMITMENT TO RECEIVER",
                name : "3 Nephi 19:28",
                quote : "Father, I thank thee that thou hast purified those whom I have chosen, because of their faith, and I pray for them, and also for them who shall believe on their words, that they may be purified in me, through faith on their words, even as they are purified in me.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/19.p28#p28"    
            },
            {
                day : 29,
                title : "COME THROUGH REVELATION",
                name : "Jarom 1:11",
                quote : "…persuading them to look forward unto the Messiah, and believe in him to come as though he already was. And after this manner did they teach them.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/jarom/1.p11#p11"    
            },
            {
                day : 30,
                title : "CAN’T THINK RATIONALIZATION",
                name : "D&C 1:31",
                quote : "For I the Lord cannot look upon sin with the least degree of allowance;",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/1.p31#p31"    
            },
            {
                day : 31,
                title : "CONFESS THROUGH RIGHTEOUSNESS",
                name : "D&C 6:35",
                quote : "Behold, I do not condemn you; go your ways and sin no more; perform with soberness the work which I have commanded you.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/6.p35#p35"    
            },
        ]
    },
    {
        month : 4,
        quotes : [
            {
                day : 1,
                title : "CHRIST TRAITS RULE",
                name : "John 15:13",
                quote : "Greater love hath no man than this, that a man lay down his life for his friends." ,
                link : "https://www.churchofjesuschrist.org/study/scriptures/nt/john/15.p13#p13"   
            },
            {
                day : 2,
                title : "CLEANSE THY REBELLION",
                name : "Jacob 1:8",
                quote : "Wherefore, we would to God that we could persuade all men not to rebel against God, to provoke him to anger, but that all men would believe in Christ, and view his death, and suffer his cross and bear the shame of the world…",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/jacob/1.p8#p8"    
            },
            {
                day : 3,
                title : "CHOOSEN TO RESURRECT",
                name : "Alma 11:43",
                quote : "The spirit and the body shall be reunited again in its perfect form; both limb and joint shall be restored to its proper frame, even as we now are at this time; and we shall be brought to stand before God, knowing even as we know now, and have a bright recollection of all our guilt.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/11.p43#p43"    
            },
            {
                day : 4,
                title : "CHRIST TRUTH RETURNS",
                name : "John 10:10",
                quote : "…I am come that they might have life, and that they might have it more abundantly." ,
                link : "https://www.churchofjesuschrist.org/study/scriptures/nt/john/10.p10#p10"   
            },
            {
                day : 5,
                title : "CELESTIAL THROUGH REDEEMER",
                name : "John 14:2",
                quote : "In my Father’s house are many mansions: if it were not so, I would have told you. I go to prepare a place for you.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/nt/john/14.p2#p2"    
            },
            {
                day : 6,
                title : "CHRIST THAT REIGNS",
                name : "D&C 20:24",
                quote : "And ascended into heaven, to sit down on the right hand of the Father, to reign with almighty power according to the will of the Father.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/20.p24#p24"    
            },
            {
                day : 7,
                title : "CHRIST TRULY RISKED",
                name : "Matthew 26:39",
                quote : "And he went a little further, and fell on his face, and prayed, saying, O my Father, if it be possible, let this cup pass from me: nevertheless not as I will, but as thou wilt.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/nt/matt/26.p39#p39"    
            },
            {
                day : 8,
                title : "CHIRST’S TRUE RELATIONSHIP",
                name : "Mosiah 3:8",
                quote : "And he shall be called Jesus Christ, the Son of God, the Father of heaven and earth, the Creator of all things from the beginning; and his mother shall be called Mary.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/3.p8#p8"    
            },
            {
                day : 9,
                title : "COMMIT TO RESTITUTION",
                name : "Exodus 22:3",
                quote : "If the sun be risen upon him, there shall be blood shed for him; for he should make full restitution; if he have nothing, then he shall be sold for his theft.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/ot/ex/22.p3#p3"    
            },
            {
                day : 10,
                title : "CAPACITY TO REIGN",
                name : "Romans 8:17",
                quote : "And if children, then heirs; heirs of God, and joint-heirs with Christ; if so be that we suffer with him, that we may be also glorified together.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/nt/rom/8.p17#p17"    
            },
            {
                day : 11,
                title : "CHOOSE TO RETURN",
                name : "Deut. 30:2",
                quote : "And shalt return unto the Lord thy God, and shalt obey his voice according to all that I command thee this day, thou and thy children, with all thine heart, and with all thy soul;",
                link : "https://www.churchofjesuschrist.org/study/scriptures/ot/deut/30.p2#p2"    
            },
            {
                day : 12,
                title : "CELESTIALIZE THY RETURN",
                name : "Isaiah 11:5",
                quote : "And righteousness shall be the girdle of his loins, and faithfulness the girdle of his reins.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/ot/isa/11.p5#p5"    
            },
            {
                day : 13,
                title : "COMFORTER TEACHES REMEMBRANCE",
                name : "John 14:26",
                quote : "But the Comforter, which is the Holy Ghost, whom the Father will send in my name, he shall teach you all things, and bring all things to your remembrance, whatsoever I have said unto you.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/nt/john/14.p26#p26"   
            },
            {
                day : 14,
                title : "CHRIST’S TESTAMENT REPLENISHES",
                name : "Heb. 7:22",
                quote : "By so much was Jesus made a surety of a better testament." ,
                link : "https://www.churchofjesuschrist.org/study/scriptures/nt/heb/7.p22#p22"   
            },
            {
                day : 15,
                title : "CHRIST’S THORNS REMAIN",
                name : "3 Nephi 11:14",
                quote : "Arise and come forth unto me, that ye may thrust your hands into my side, and also that ye may feel the prints of the nails in my hands and in my feet, that ye may know that I am the God of Israel, and the God of the whole earth, and have been slain for the sins of the world.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/11.p14#p14"    
            },
            {
                day : 16,
                title : "COMPREHEND THE RESURRECTION",
                name : "Rev. 20:6",
                quote : "Blessed and holy is he that hath part in the first resurrection: on such the second death hath no power, but they shall be priests of God and of Christ, and shall reign with him a thousand years.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/nt/rev/20.p6#p6"    
            },
            {
                day : 17,
                title : "CONNECT THROUGH REDEEMER",
                name : "2 Nephi 31:17",
                quote : "Wherefore, do the things which I have told you I have seen that your Lord and your Redeemer should do; for, for this cause have they been shown unto me, that ye might know the gate by which ye should enter…",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/31.p17#p17"    
            },
            {
                day : 18,
                title : "CONNECT THROUGH REMEMBERING",
                name : "D&C 90:24",
                quote : "Search diligently, pray always, and be believing, and all things shall work together for your good, if ye walk uprightly and remember the covenant wherewith ye have covenanted one with another.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/90.p24#p24"    
            },
            {
                day : 19,
                title : "CHRIST THE RIGHTEOUS",
                name : "Alma 38:9",
                quote : "And now, my son, I have told you this that ye may learn wisdom, that ye may learn of me that there is no other way or means whereby man can be saved, only in and through Christ. Behold, he is the life and the light of the world. Behold, he is the word of truth and righteousness.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/38.p9#p9"    
            },
            {
                day : 20,
                title : "COUNSEL THYSELF RIGHTEOUSLY",
                name : "Proverbs 20:5",
                quote : "Counsel in the heart of man is like deep water; but a man of understanding will draw it out.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/ot/prov/20.p5#p5"    
            },
            {
                day : 21,
                title : "COMPASSION THROUGH RELATING",
                name : "Alma 7:12",
                quote : "…and he will take upon him their infirmities, that his bowels may be filled with mercy, according to the flesh, that he may know according to the flesh how to succor his people according to their infirmities.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/7.p12#p12"    
            },
            {
                day : 22,
                title : "CELESTIALIZE THROUGH REDEEMER",
                name : "John 14:6",
                quote : "Jesus saith unto him, I am the way, the truth, and the life: no man cometh unto the Father, but by me." ,
                link : "https://www.churchofjesuschrist.org/study/scriptures/nt/john/14.p6#p6"   
            },
            {
                day : 23,
                title : "CREATE THROUGH REDEEMER",
                name : "1 Cor. 3:9",
                quote : "For we are labourers together with God: ye are God’s husbandry, ye are God’s building.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/nt/1-cor/3.p9#p9"    
            },
            {
                day : 24,
                title : "COMMIT TO RELEASE",
                name : "D&C 19:35",
                quote : "“…Release thyself from bondage.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/19.p35#p35"    
            },
            {
                day : 25,
                title : "CHRIST TRULY REPRESENTED",
                name : "Moroni 7:28",
                quote : "For he hath answered the ends of the law, and he claimeth all those who have faith in him; and they who have faith in him will cleave unto every good thing; wherefore he advocateth the cause of the children of men...",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/moro/7.p28#p28"    
            },
            {
                day : 26,
                title : "CHRIST THE RESURRECTOR",
                name : "1 Cor. 15:22",
                quote : "For as in Adam all die, even so in Christ shall all be made alive.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/nt/1-cor/15.p22#p22"    
            },
            {
                day : 27,
                title : "CHRIST THE REPAIRER",
                name : "Mosiah 7:33",
                quote : "But if ye will turn to the Lord with full purpose of heart, and put your trust in him, and serve him with all diligence of mind, if ye do this, he will, according to his own will and pleasure, deliver you out of bondage.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/7.p33#p33"    
            },
            {
                day : 28,
                title : "CONCERNED TODDLERS REMORSE",
                name : "Jacob 2:7",
                quote : "And also it grieveth me that I must use so much boldness of speech concerning you, before your wives and your children, many of whose feelings are exceedingly tender and chaste and delicate before God, which thing is pleasing unto God.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/jacob/2.p7#p7"    
            },
            {
                day : 29,
                title : "COUNSELED THROUGH REVELATON",
                name : "Mosiah 27:14",
                quote : "And again, the angel said: Behold, the Lord hath heard the prayers of his people, and also the prayers of his servant, Alma, who is thy father; for he has prayed with much faith concerning thee that thou mightest be brought to the knowledge of the truth; therefore, for this purpose have I come to convince thee of the power and authority of God, that the prayers of his servants might be answered according to their faith.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/27.p14#p14"    
            },
            {
                day : 30,
                title : "COME TRANSGRESSORS REPENT",
                name : "Alma 34:17",
                quote : "Therefore may God grant unto you, my brethren, that ye may begin to exercise your faith unto repentance, that ye begin to call upon his holy name, that he would have mercy upon you.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/34.p17#p17"   
            },
        ]
    },
    {
        month : 5,
        quotes : [
            {
                day : 1,
                title : "CLEAN THOUGHTS REACH",
                name : "Alma 37:36",
                quote : "Yea, and cry unto God for all thy support; yea, let all thy doings be unto the Lord, and whithersoever thou goest let it be in the Lord; yea, let all thy thoughts be directed unto the Lord; yea, let the affections of thy heart be placed upon the Lord forever.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/37.p36#p36"    
            },
            {
                day : 2,
                title : "CHRIST TEACHES RESPECT",
                name : "D&C 1:35",
                quote : "For I am no respecter of persons…" ,
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/1.p35#p35"   
            },
            {
                day : 3,
                title : "CHRIST’S TRUTH RETURNS",
                name : "D&C 1:30",
                quote : "And also those to whom these commandments were given, might have power to lay the foundation of this church, and to bring it forth out of obscurity and out of darkness, the only true and living church upon the face of the whole earth, with which I, the Lord, am well pleased…",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/1.p30#p30"    
            },
            {
                day : 4,
                title : "CHRIST’S TOUGH RELATIONSHIPS",
                name : "1 Nephi 17:55",
                quote : "And now, they said: We know of a surety that the Lord is with thee, for we know that it is the power of the Lord that has shaken us...",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/1-ne/17.p55#p55"    
            },
            {
                day : 5,
                title : "CLEANSE THY RESENTMENT",
                name : "Alma 19:6",
                quote : "Now, this was what Ammon desired, for he knew that king Lamoni was under the power of God; he knew that the dark veil of unbelief was being cast away from his mind, and the light which did light up his mind...",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/19.p6#p6"    
            },
            {
                day : 6,
                title : "CHOSE TO REPRESENT",
                name : "D&C 77:4",
                quote : "Their eyes are a representation of light and knowledge, that is, they are full of knowledge; and their wings are a representation of power, to move, to act, etc.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/77.p4#p4"    
            },
            {
                day : 7,
                title : "CHRIST TOUCHES REPENTERS",
                name : "Alma 13:12",
                quote : "Now they, after being sanctified by the Holy Ghost, having their garments made white, being pure and spotless before God, could not look upon sin save it were with abhorrence; and there were many, exceedingly great many, who were made pure and entered into the rest of the Lord their God.;",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/13.p12#p12"    
            },
            {
                day : 8,
                title : "CEASE THINKING REVENGE",
                name : "D&C 98:23",
                quote : "Now, I speak unto you concerning your families—if men will smite you, or your families, once, and ye bear it patiently and revile not against them, neither seek revenge, ye shall be rewarded;",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/98.p23#p23"    
            },
            {
                day : 9,
                title : "CONSENT TO REMAIN",
                name : "Prov. 1:10",
                quote : "My son, if sinners entice thee, consent thou not.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/ot/prov/1.p10#p10"    
            },
            {
                day : 10,
                title : "COME THIRSTY REPLENISH",
                name : "John 4:14",
                quote : "But whosoever drinketh of the water that I shall give him shall never thirst; but the water that I shall give him shall be in him a well of water springing up into everlasting life.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/nt/john/4.p14#p14"    
            },
            {
                day : 11,
                title : "CALM TEACHERS REIGN",
                name : "D&C 135:4",
                quote : "When Joseph went to Carthage to deliver himself up to the pretended requirements of the law, two or three days previous to his assassination, he said: “I am going like a lamb to the slaughter; but I am calm as a summer’s morning; I have a conscience void of offense towards God, and towards all men. I shall die innocent, and it shall yet be said of me—he was murdered in cold blood”...",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/135.p4#p4"    
            },
            {
                day : 12,
                title : "CONFESS TO RECOVER",
                name : "3 Nephi 1:25",
                quote : "…therefore in this same year were they brought to a knowledge of their error and did confess their faults.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/1.p25#p25"    
            },
            {
                day : 13,
                title : "COME THROUGH ROYALTY",
                name : "James 2:5",
                quote : "Hearken, my beloved brethren, Hath not God chosen the poor of this world rich in faith, and heirs of the kingdom which he hath promised to them that love him?",
                link : "https://www.churchofjesuschrist.org/study/scriptures/nt/james/2.p5#p5"    
            },
            {
                day : 14,
                title : "CHILDREN TOUCH REDEEMER",
                name : "3 Nephi 17:21",
                quote : "…and he took their little children, one by one, and blessed them, and prayed unto the Father for them.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/17.p21#p21"   
            },
            {
                day : 15,
                title : "CHOOSE THY REWARD",
                name : "Alma 3:26",
                quote : "…that they might reap their rewards according to their works, whether they were good or whether they were bad, to reap eternal happiness or eternal misery, according to the spirit which they listed to obey, whether it be a good spirit or a bad one.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/3.p26#p26"   
            },
            {
                day : 16,
                title : "CHOOSE TREASURES RIGHTEOUSLY",
                name : "Matthew 6:20",
                quote : "But lay up for yourselves treasures in heaven, where neither moth nor rust doth corrupt, and where thieves do not break through nor steal:",
                link : "https://www.churchofjesuschrist.org/study/scriptures/nt/matt/6.p20#p20"    
            },
            {
                day : 17,
                title : "CHOIRS TOUCH REDEEMER",
                name : "D&C 25:12",
                quote : "For my soul delighteth in the song of the heart; yea, the song of the righteous is a prayer unto me, and it shall be answered with a blessing upon their heads.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/25.p12#p12"    
            },
            {
                day : 18,
                title : "CHRISTIANS TAKEN RELIGIOUSLY",
                name : "D&C 45:46",
                quote : "Wherefore, if ye have slept in peace blessed are you; for as you now behold me and know that I am, even so shall ye come unto me and your souls shall live, and your redemption shall be perfected; and the saints shall come forth from the four quarters of the earth.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/45.p46#p46"    
            },
            {
                day : 19,
                title : "COME TO RESPECT",
                name : "D&C 134:6",
                quote : "…and that to the laws all men owe respect and deference, as without them peace and harmony would be supplanted by anarchy and terror; human laws being instituted for the express purpose of regulating our interests as individuals and nations, between man and man; and divine laws given of heaven, prescribing rules on spiritual concerns, for faith and worship, both to be answered by man to his Maker.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/134.p6#p6"    
            },
            {
                day : 20,
                title : "CONFIDENCE THROUGH REALITY",
                name : "D&C 122:9",
                quote : "Therefore, hold on thy way, and the priesthood shall remain with thee; for their bounds are set, they cannot pass. Thy days are known, and thy years shall not be numbered less; therefore, fear not what man can do, for God shall be with you forever and ever.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/122.p9#p9"    
            },
            {
                day : 21,
                title : "CONTEMPLATE THY READING",
                name : "1 Tim. 4:13",
                quote : "Till I come, give attendance to reading, to exhortation, to doctrine.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/nt/1-tim/4.p13#p13"    
            },
            {
                day : 22,
                title : "CHOOSE TO RISE",
                name : "Isaiah 58:10",
                quote : "And if thou draw out thy soul to the hungry, and satisfy the afflicted soul; then shall thy light rise in obscurity, and thy darkness be as the noonday:",
                link : "https://www.churchofjesuschrist.org/study/scriptures/ot/isa/58.p10#p10"    
            },
            {
                day : 23,
                title : "CHRIST TEACHES ROUNDNESS",
                name : "1 Nephi 10:19",
                quote : "For he that diligently seeketh shall find; and the mysteries of God shall be unfolded unto them, by the power of the Holy Ghost, as well in these times as in times of old, and as well in times of old as in times to come; wherefore, the course of the Lord is one eternal round.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/1-ne/10.p19#p19"    
            },
            {
                day : 24,
                title : "CHILDREN THAT REMEMBERED",
                name : "2 Nephi 26:33",
                quote : "..for he doeth that which is good among the children of men; and he doeth nothing save it be plain unto the children of men; and he inviteth them all to come unto him and partake of his goodness;...",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/26.p33#p33"    
            },
            {
                day : 25,
                title : "CHARITY THROUGH REDEEMER",
                name : "Mosiah 2:17",
                quote : "And behold, I tell you these things that ye may learn wisdom; that ye may learn that when ye are in the service of your fellow beings ye are only in the service of your God.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/2.p17#p17"    
            },
            {
                day : 26,
                title : "CHRIST THANKS READILY",
                name : "Alma 4:13-14",
                quote : "13 … such as imparting their substance to the poor and the needy, feeding the hungry, and suffering all manner of afflictions, for Christ’s sake, who should come according to the spirit of prophecy; 14. …being filled with great joy because of the resurrection of the dead, according to the will and power and deliverance of Jesus Christ from the bands of death.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/4.p13-p14#p13"    
            },
            {
                day : 27,
                title : "CONTENTION TOTTALY REBUKED",
                name : "3 Nephi 11:29",
                quote : "For verily, verily I say unto you, he that hath the spirit of contention is not of me, but is of the devil, who is the father of contention, and he stirreth up the hearts of men to contend with anger, one with another.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/11.p29#p29"    
            },
            {
                day : 28,
                title : "CHARITY TRUELY RESTORES",
                name : "Alma 41:3",
                quote : "And it is requisite with the justice of God that men should be judged according to their works; and if their works were good in this life, and the desires of their hearts were good, that they should also, at the last day, be restored unto that which is good.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/41.p3#p3"    
            },
            {
                day : 29,
                title : "CHANCES TAKEN RIGHT",
                name : "3 Nephi 10:5",
                quote : "And again, how oft would I have gathered you as a hen gathereth her chickens under her wings, yea, O ye people of the house of Israel, who have fallen; yea, O ye people of the house of Israel, ye that dwell at Jerusalem, as ye that have fallen; yea, how oft would I have gathered you as a hen gathereth her chickens, and ye would not.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/10.p5#p5https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/10.p5#p5"    
            },
            {
                day : 30,
                title : "COMES THROUGH REVELATION",
                name : "Mormon 8:35",
                quote : "Behold, I speak unto you as if ye were present, and yet ye are not. But behold, Jesus Christ hath shown you unto me, and I know your doing.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/morm/8.p35#p35"    
            },
            {
                day : 31,
                title : "CONFOUNDED THROUGH RIGHTEOUSNESS",
                name : "Ether 8:26",
                quote : "Wherefore, I, Moroni, am commanded to write these things that evil may be done away, and that the time may come that Satan may have no power upon the hearts of the children of men, but that they may be persuaded to do good continually, that they may come unto the fountain of all righteousness and be saved.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/ether/8.p26#p26"    
            },
            

        ]
    },
    {
        month : 6,
        quotes : [
            {
                day : 1,
                title : "CHOOSE THE RIGHTEOUS",
                name : "1 Nephi 15:30",
                quote : "And I said unto them that our father also saw that the justice of God did also divide the wicked from the righteous; and the brightness thereof was like unto the brightness of a flaming fire, which ascendeth up unto God forever and ever, and hath no end.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/1-ne/15.p30#p30"    
            },
            {
                day : 2,
                title : "CONFIDENCE THROUGH RIGHTEOUSNESS",
                name : "D&C 121:45",
                quote : "Let thy bowels also be full of charity towards all men, and to the household of faith, and let virtue garnish thy thoughts unceasingly; then shall thy confidence wax strong in the presence of God…",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/121.p45#p45"    
            },
            {
                day : 3,
                title : "CHOICES TAKE RISK",
                name : "Mormon 8:5",
                quote : "…for I am alone. My father hath been slain in battle, and all my kinsfolk, and I have not friends nor whither to go; and how long the Lord will suffer that I may live I know not.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/morm/8.p5#p5"    
            },
            {
                day : 4,
                title : "CHOOSE TO RE-EVALUATE",
                name : "2 Nephi 33:10",
                quote : "And now, my beloved brethren, and also Jew, and all ye ends of the earth, hearken unto these words and believe in Christ; and if ye believe not in these words believe in Christ. And if ye shall believe in Christ ye will believe in these words, for they are the words of Christ, and he hath given them unto me; and they teach all men that they should do good.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/33.p10#p10"    
            },
            {
                day : 5,
                title : "CHOOSE TO REVERE",
                name : "2 Nephi 31:10",
                quote : "And he said unto the children of men: Follow thou me. Wherefore, my beloved brethren, can we follow Jesus save we shall be willing to keep the commandments of the Father?",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/31.p10#p10"    
            },
            {
                day : 6,
                title : "CREATE TRUTH RELIGIOUSLY",
                name : "D&C 50:24",
                quote : "That which is of God is light; and he that receiveth light, and continueth in God, receiveth more light; and that light groweth brighter and brighter until the perfect day.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/50.p24#p24"    
            },
            {
                day : 7,
                title : "COMMANDMENTS TEACH REPENTANCE",
                name : "2 Nephi 2:21",
                quote : "…For he gave commandment that all men must repent; for he showed unto all men that they were lost, because of the transgression of their parents.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/2.p21#p21"    
            },
            {
                day : 8,
                title : "COMPASS THE REDEEMER",
                name : "Hebrews 12:1",
                quote : "herefore seeing we also are compassed about with so great a cloud of witnesses, let us lay aside every weight, and the sin which doth so easily beset us, and let us run with patience the race that is set before us,",
                link : "https://www.churchofjesuschrist.org/study/scriptures/nt/heb/12.p1#p1"    
            },
            {
                day : 9,
                title : "CORRECTED TRIALS RECEIVED",
                name : "3 Nephi 12:24",
                quote : "Go thy way unto thy brother, and first be reconciled to thy brother, and then come unto me with full purpose of heart, and I will receive you.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/12.p24#p24"    
            },
            {
                day : 10,
                title : "CARING TRULY REPLENISHES",
                name : "Alma 32:27",
                quote : "But behold, if ye will awake and arouse your faculties, even to an experiment upon my words, and exercise a particle of faith, yea, even if ye can no more than desire to believe, let this desire work in you, even until ye believe in a manner that ye can give place for a portion of my words.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/32.p27#p27"    
            },
            {
                day : 11,
                title : "CHASTISEMENT TO REMEMBER",
                name : "Helaman 12:3",
                quote : "And thus we see that except the Lord doth chasten his people with many afflictions, yea, except he doth visit them with death and with terror, and with famine and with all manner of pestilence, they will not remember him.", 
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/hel/12.p3#p3"   
            },
            {
                day : 12,
                title : "CONTINUE TEMPLE RE-ENTRANCE",
                name : "Isaiah 2:3",
                quote : "And many people shall go and say, Come ye, and let us go up to the mountain of the Lord, to the house of the God of Jacob; and he will teach us of his ways, and we will walk in his paths:...",
                link : "https://www.churchofjesuschrist.org/study/scriptures/ot/isa/2.p3#p3"    
            },
            {
                day : 13,
                title : "CONTINUE TESTIFYING REDEEMER",
                name : "Acts 18:5",
                quote : "And when Silas and Timotheus were come from Macedonia, Paul was pressed in the spirit, and testified to the Jews that Jesus was Christ.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/nt/acts/18.p5#p5"    
            },
            {
                day : 14,
                title : "CONTINUE TRUSTING RIGHTEOUSLY",
                name : "D&C 58:27-28",
                quote : "27. Verily I say, men should be anxiously engaged in a good cause, and do many things of their own free will, and bring to pass much righteousness; 28. For the power is in them, wherein they are agents unto themselves. And inasmuch as men do good they shall in nowise lose their reward.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/58.p27-p28#p27"    
            },
            {
                day : 15,
                title : "CHARITY TOUCHES REBELLIOUS",
                name : "Luke 15:20",
                quote : "And he arose, and came to his father. But when he was yet a great way off, his father saw him, and had compassion, and ran, and fell on his neck, and kissed him.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/nt/luke/15.p20#p20"    
            },
            {
                day : 16,
                title : "CHART THY ROAD",
                name : "Haggai 1:7",
                quote : "Thus saith the Lord of hosts; Consider your ways.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/ot/hag/1.p7#p7"    
            },
            {
                day : 17,
                title : "CONFIRMATIONS TEACH REMEMBRANCE",
                name : "John 14:23",
                quote : "Jesus answered and said unto him, If a man love me, he will keep my words: and my Father will love him, and we will come unto him, and make our abode with him.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/nt/john/14.p23#p23"    
            },
            {
                day : 18,
                title : "CUT TEMPTATIONS RIGHTAWAY",
                name : "2 Nephi 4:27",
                quote : "And why should I yield to sin, because of my flesh? Yea, why should I give way to temptations, that the evil one have place in my heart to destroy my peace and afflict my soul? Why am I angry because of mine enemy?",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/4.p27#p27"    
            },
            {
                day : 19,
                title : "CONSTANT TEMPTATIONS RUIN",
                name : "Alma 39:11",
                quote : "Suffer not yourself to be led away by any vain or foolish thing; suffer not the devil to lead away your heart again after those wicked harlots...",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/39.p11#p11"    
            },
            {
                day : 20,
                title : "COMFORT THE REBELLIOUS",
                name : "1 Thes. 5:14",
                quote : "Now we exhort you, brethren, warn them that are unruly, comfort the feebleminded, support the weak, be patient toward all men.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/nt/1-thes/5.p14#p14"    
            },
            {
                day : 21,
                title : "CHRIST TRULY RECOGNIZES",
                name : "John 10:14",
                quote : "I am the good shepherd, and know my sheep, and am known of mine.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/nt/john/10.p14#p14"    
            },
            {
                day : 22,
                title : "CONQUERING TRIALS REINFORCE",
                name : "Alma 26:27",
                quote : "Now when our hearts were depressed, and we were about to turn back, behold, the Lord comforted us, and said: Go amongst thy brethren, the Lamanites, and bear with patience thine afflictions, and I will give unto you success.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/26.p27#p27"    
            },
            {
                day : 23,
                title : "CONSIDER THE RELIEF",
                name : "Mosiah 4:26",
                quote : "…for the sake of retaining a remission of your sins from day to day, that ye may walk guiltless before God—I would that ye should impart of your substance to the poor, every man according to that which he hath, such as feeding the hungry, clothing the naked, visiting the sick and administering to their relief, both spiritually and temporally, according to their wants.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/4.p26#p26"    
            },
            {
                day : 24,
                title : "CHRIST THE REVERED",
                name : "Moses 1:15",
                quote : "Blessed be the name of my God, for his Spirit hath not altogether withdrawn from me, or else where is thy glory, for it is darkness unto me? And I can judge between thee and God; for God said unto me: Worship God, for him only shalt thou serve.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/pgp/moses/1.p15#p15"    
            },
            {
                day : 25,
                title : "CONTINUE TO RECOMMIT",
                name : "Moroni 6:6",
                quote : "And they did meet together oft to partake of bread and wine, in remembrance of the Lord Jesus.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/moro/6.p6#p6"    
            },
            {
                day : 26,
                title : "CONTINUE TO RE-ENLIGHTEN",
                name : "D&C 50:24",
                quote : "That which is of God is light; and he that receiveth light, and continueth in God, receiveth more light; and that light groweth brighter and brighter until the perfect day.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/50.p24#p24"    
            },
            {
                day : 27,
                title : "CRUSHING TRIALS RELIEVED",
                name : "Mosiah 24:14",
                quote : "And I will also ease the burdens which are put upon your shoulders, that even you cannot feel them upon your backs, even while you are in bondage; and this will I do that ye may stand as witnesses for me hereafter, and that ye may know of a surety that I, the Lord God, do visit my people in their afflictions.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/24.p14#p14"    
            },
            {
                day : 28,
                title : "CAN THEE REIGN?",
                name : "Alma 3:26",
                quote : "And in one year were thousands and tens of thousands of souls sent to the eternal world, that they might reap their rewards according to their works, whether they were good or whether they were bad, to reap eternal happiness or eternal misery, according to the spirit which they listed to obey, whether it be a good spirit or a bad one.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/3.p26#p26"    
            },
            {
                day : 29,
                title : "CHRIST TALKS REASONS",
                name : "Alma 9:16",
                quote : "For there are many promises which are extended to the Lamanites; for it is because of the traditions of their fathers that caused them to remain in their state of ignorance; therefore the Lord will be merciful unto them and prolong their existence in the land.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/9.p16#p16"    
            },
            {
                day : 30,
                title : "CAN’T THINK REBELLIOUSLY",
                name : "Alma 13:12",
                quote : "Now they, after being sanctified by the Holy Ghost, having their garments made white, being pure and spotless before God, could not look upon sin save it were with abhorrence; and there were many, exceedingly great many, who were made pure and entered into the rest of the Lord their God.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/13.p12#p12" 
            },
        ]
    },
    {
        month : 7,
        quotes: [
            {
                day : 1,
                title : "CLARITY TEACHES RIGHTEOUSNESS",
                name : "D&C 11:21",
                quote : "Seek not to declare my word, but first seek to obtain my word, and then shall your tongue be loosed; then, if you desire, you shall have my Spirit and my word, yea, the power of God unto the convincing of men.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/11.p21#p21"    
            },
            {
                day : 2,
                title : "COMMIT TO REPENTANCE",
                name : "D&C5:21",
                quote : "And now I command you, my servant Joseph, to repent and walk more uprightly before me, and to yield to the persuasions of men no more;",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/5.p21#p21"    
            },
            {
                day : 3,
                title : "CHOOSE TO REACHOUT",
                name : "D&C 18:15",
                quote : "And if it so be that you should labor all your days in crying repentance unto this people, and bring, save it be one soul unto me, how great shall be your joy with him in the kingdom of my Father!",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/18.p15#p15"    
            },
            {
                day : 4,
                title : "CASTAWAY TOUGH REACTIONS",
                name : "Matthew 26:52",
                quote : "Then said Jesus unto him, Put up again thy sword into his place: for all they that take the sword shall perish with the sword.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/nt/matt/26.p52#p52"    
            },
            {
                day : 5,
                title : "CLEANSE THROUGH REPENTANCE",
                name : "Mormon 9:6",
                quote : "O then ye unbelieving, turn ye unto the Lord; cry mightily unto the Father in the name of Jesus, that perhaps ye may be found spotless, pure, fair, and white, having been cleansed by the blood of the Lamb, at that great and last day.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/morm/9.p6#p6"    
            },
            {
                day : 6,
                title : "CONVERT THROUGH REVELATION",
                name : "D&C 75:4",
                quote : "Lifting up your voices as with the sound of a trump, proclaiming the truth according to the revelations and commandments which I have given you.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/75.p4#p4"    
            },
            {
                day : 7,
                title : "CALL THROUGH REVERENCE",
                name : "D&C 109:21",
                quote : "And when thy people transgress, any of them, they may speedily repent and return unto thee, and find favor in thy sight, and be restored to the blessings which thou hast ordained to be poured out upon those who shall reverence thee in thy house.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/109.p21#p21"    
            },
            {
                day : 8,
                title : "CLEANSE THYSELF RIGHT",
                name : "Alma 13:27",
                quote : "And now, my brethren, I wish from the inmost part of my heart, yea, with great anxiety even unto pain, that ye would hearken unto my words, and cast off your sins, and not procrastinate the day of your repentance;",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/13.p27#p27"    
            },
            {
                day : 9,
                title : "CONSCIENCE TEACHES RIGHTEOUSNESS",
                name : "Alma 29:5",
                quote : "Yea, and I know that good and evil have come before all men; he that knoweth not good from evil is blameless; but he that knoweth good and evil, to him it is given according to his desires, whether he desireth good or evil, life or death, joy or remorse of conscience.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/29.p5#p5"    
            },
            {
                day : 10,
                title : "CONTROL TONGUE REACTIONS",
                name : "Prov. 21:23",
                quote : "Whoso keepeth his mouth and his tongue keepeth his soul from troubles.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/ot/prov/21.p23#p23"    
            },
            {
                day : 11,
                title : "CHRIST TRIES RIGHTEOUS",
                name : "Mosiah 23:21",
                quote : "Nevertheless the Lord seeth fit to chasten his people; yea, he trieth their patience and their faith.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/23.p21#p21"    
            },
            {
                day : 12,
                title : "COMPASS THE ROAD",
                name : "1 Nephi 16:16",
                quote : "And we did follow the directions of the ball, which led us in the more fertile parts of the wilderness.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/1-ne/16.p16#p16"    
            },
            {
                day : 13,
                title : "CONFESSION TRULY RELIEVES",
                name : "1 John 1:9",
                quote : "If we confess our sins, he is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/nt/1-jn/1.p9#p9"    
            },
            {
                day : 14,
                title : "CONTINUAL THRUSTING RECAPS",
                name : "D&C 4:4",
                quote : "For behold the field is white already to harvest; and lo, he that thrusteth in his sickle with his might, the same layeth up in store that he perisheth not, but bringeth salvation to his soul;",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/4.p4#p4"    
            },
            {
                day : 15,
                title : "CELESTIAL THE REWARD",
                name : "D&C 132:23",
                quote : "But if ye receive me in the world, then shall ye know me, and shall receive your exaltation; that where I am ye shall be also.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/132.p23#p23"    
            },
            {
                day : 16,
                title : "CONTINUE TEACHING RIGHTEOUSNESS",
                name : "Helaman 13:3",
                quote : "But behold, the voice of the Lord came unto him, that he should return again, and prophesy unto the people whatsoever things should come into his heart.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/hel/13.p3#p3"    
            },
            {
                day : 17,
                title : "CONSTANTLY TRUST REDEEMER",
                name : "Psalms 62:8",
                quote : "Trust in him at all times; ye people, pour out your heart before him: God is a refuge for us. Selah.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/ot/ps/62.p8#p8"    
            },
            {
                day : 18,
                title : "CONTINUE TO RECOVER",
                name : "2 Tim. 2:25-26",
                quote : `25. In meekness instructing those that oppose themselves; if God peradventure will give them repentance to the acknowledging of the truth;
                26. And that they may recover themselves out of the snare of the devil, who are taken captive by him at his will.`,
                link : "https://www.churchofjesuschrist.org/study/scriptures/nt/2-tim/2.p25-p26#p25"   
            },
            {
                day : 19,
                title : "CONQUERED THROUGH REPETITION",
                name : "D&C 67:13",
                quote : "Ye are not able to abide the presence of God now, neither the ministering of angels; wherefore, continue in patience until ye are perfected.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/67.p13#p13"    
            },
            {
                day : 20,
                title : "CHOOSE TO RELOCATE",
                name : "Alma 27:24",
                quote : "And now behold, this will we do unto our brethren, that they may inherit the land Jershon; and we will guard them from their enemies with our armies, on condition that they will give us a portion of their substance to assist us that we may maintain our armies.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/27.p24#p24"    
            },
            {
                day : 21,
                title : "CHRIST TEACHES REALITY",
                name : "Alma 34:34",
                quote : "Ye cannot say, when ye are brought to that awful crisis, that I will repent, that I will return to my God. Nay, ye cannot say this; for that same spirit which doth possess your bodies at the time that ye go out of this life, that same spirit will have power to possess your body in that eternal world.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/34.p34#p34"    
            },
            {
                day : 22,
                title : "CHRIST’S TOWER REBELS",
                name : "2 Nephi 15:2",
                quote : "And he fenced it, and gathered out the stones thereof, and planted it with the choicest vine, and built a tower in the midst of it, and also made a wine-press therein; and he looked that it should bring forth grapes, and it brought forth wild grapes.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/15.p2#p2"    
            },
            {
                day : 23,
                title : "COMMUNICATE TIDINGS REVEALED",
                name : "Mosiah 12:21",
                quote : "How beautiful upon the mountains are the feet of him that bringeth good tidings; that publisheth peace; that bringeth good tidings of good; that publisheth salvation; that saith unto Zion, Thy God reigneth;",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/12.p21#p21"    
            },
            {
                day : 24,
                title : "COMFORT THOSE REQUESTING",
                name : "Mosiah 18:21",
                quote : "And he commanded them that there should be no contention one with another, but that they should look forward with one eye, having one faith and one baptism, having their hearts knit together in unity and in love one towards another.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/18.p21#p21"    
            },
            {
                day : 25,
                title : "CONTEMPLATE THE REJOICING",
                name : "2 Nephi 2:25",
                quote : "Adam fell that men might be; and men are, that they might have joy.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/2.p25#p25"    
            },
            {
                day : 26,
                title : "CONCERNING TRIALS REMEMBER",
                name : "Alma 32:21",
                quote : "And now as I said concerning faith—faith is not to have a perfect knowledge of things; therefore if ye have faith ye hope for things which are not seen, which are true.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/32.p21#p21"    
            },
            {
                day : 27,
                title : "CUT THROUGH RAMBLING",
                name : "Alma 38:12",
                quote : "Use boldness, but not overbearance; and also see that ye bridle all your passions, that ye may be filled with love; see that ye refrain from idleness.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/38.p12#p12"    
            },
            {
                day : 28,
                title : "CONSTRUCT THROUGH REVERED",
                name : "Alma 48:17",
                quote : "Yea, verily, verily I say unto you, if all men had been, and were, and ever would be, like unto Moroni, behold, the very powers of hell would have been shaken forever; yea, the devil would never have power over the hearts of the children of men.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/48.p17#p17"    
            },
            {
                day : 29,
                title : "CARING THAT REDEEMS",
                name : "D&C 101:37",
                quote : "Therefore, care not for the body, neither the life of the body; but care for the soul, and for the life of the soul.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/101.p37#p37"    
            },
            {
                day : 30,
                title : "CLEAN TEMPLES RETURN",
                name : "1 Cor. 3:16-17",
                quote : "16. Know ye not that ye are the temple of God, and that the Spirit of God dwelleth in you? 17. If any man defile the temple of God, him shall God destroy; for the temple of God is holy, which temple ye are.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/nt/1-cor/3.p16-p17#p16"    
            },
            {
                day : 31,
                title : "COUPLES TREAT RESPECTIVELY",
                name : "1 Cor. 7:3",
                quote : "Let the husband render unto the wife due benevolence: and likewise also the wife unto the husband.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/nt/1-cor/7.p3#p3"    
            },
        ]
    },
    {
        month : 8,
        quotes : [
            {
                day : 1,
                title : "CONVERSE THROUGH RIGHTEOUSNESS",
                name : "D&C 108:7",
                quote : "Therefore, strengthen your brethren in all your conversation, in all your prayers, in all your exhortations, and in all your doings.", 
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/108.p7#p7"    
            },
            {
                day : 2,
                title : "CHRIST TEACHES RELATIONSHIP",
                name : "3 Nephi 16:6",
                quote : "And blessed are the Gentiles, because of their belief in me, in and of the Holy Ghost, which witnesses unto them of me and of the Father.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/16.p6#p6"    
            },
            {
                day : 3,
                title : "CLEARING TAKES RISK",
                name : "Alma 61:9",
                quote : "And now, in your epistle you have censured me, but it mattereth not; I am not angry, but do rejoice in the greatness of your heart. I, Pahoran, do not seek for power, save only to retain my judgment-seat that I may preserve the rights and the liberty of my people. My soul standeth fast in that liberty in the which God hath made us free.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/61.p9#p9"    
            },
            {
                day : 4,
                title : "CELESTIAL THOUGHTS RULE",
                name : "D&C 100:5",
                quote : "Therefore, verily I say unto you, lift up your voices unto this people; speak the thoughts that I shall put into your hearts, and you shall not be confounded before men;",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/100.p5#p5"    
            },
            {
                day : 5,
                title : "CONCENTRATE TEMPLE REMEMBERING",
                name : "D&C 88:62",
                quote : "And again, verily I say unto you, my friends, I leave these sayings with you to ponder in your hearts, with this commandment which I give unto you, that ye shall call upon me while I am near—",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/88.p62#p62"    
            },
            {
                day : 6,
                title : "CHRIST TEACHES RELIEF",
                name : "Psalms 146:9",
                quote : "The Lord preserveth the strangers; he relieveth the fatherless and widow: but the way of the wicked he turneth upside down.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/ot/ps/146.p9#p9"    
            },
            {
                day : 7,
                title : "CONFIDE TO REDEEMER",
                name : "2 Nephi 32:9",
                quote : "But behold, I say unto you that ye must pray always, and not faint; that ye must not perform any thing unto the Lord save in the first place ye shall pray unto the Father in the name of Christ, that he will consecrate thy performance unto thee, that thy performance may be for the welfare of thy soul.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/32.p9#p9"    
            },
            {
                day : 8,
                title : "CONSUME THY READINGS",
                name : "2 Nephi 32:3",
                quote : "Angels speak by the power of the Holy Ghost; wherefore, they speak the words of Christ. Wherefore, I said unto you, feast upon the words of Christ; for behold, the words of Christ will tell you all things what ye should do.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/32.p3#p3"    
            },
            {
                day : 9,
                title : "CONVINCE THE REBELLIOUS",
                name : "Alma 39:7",
                quote : "And now, my son, I would to God that ye had not been guilty of so great a crime. I would not dwell upon your crimes, to harrow up your soul, if it were not for your good.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/39.p7#p7"   
            },
            {
                day : 10,
                title : "CHRIST TRANSFORMS REPENTANT",
                name : "Alma 36:24",
                quote : "Yea, and from that time even until now, I have labored without ceasing, that I might bring souls unto repentance; that I might bring them to taste of the exceeding joy of which I did taste; that they might also be born of God, and be filled with the Holy Ghost.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/36.p24#p24"    
            },
            {
                day : 11,
                title : "COMFORT THE REPENTANT",
                name : "Matthew 9:22",
                quote : "But Jesus turned him about, and when he saw her, he said, Daughter, be of good comfort; thy faith hath made thee whole. And the woman was made whole from that hour.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/nt/matt/9.p22#p22"    
            },
            {
                day : 12,
                title : "CORRUPTERS TEACH RETALIATION",
                name : "Alma 1:16",
                quote : "Nevertheless, this did not put an end to the spreading of priestcraft through the land; for there were many who loved the vain things of the world, and they went forth preaching false doctrines; and this they did for the sake of riches and honor.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/1.p16#p16"    
            },
            {
                day : 13,
                title : "CLAP THROUGH REVERENCE",
                name : "Alma 31:36",
                quote : "Now it came to pass that when Alma had said these words, that he clapped his hands upon all them who were with him. And behold, as he clapped his hands upon them, they were filled with the Holy Spirit.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/31.p36#p36"    
            },
            {
                day : 14,
                title : "COURAGE TRUST RIGHTEOUSNESS",
                name : "Alma 53:20-21",
                quote : "20. And they were all young men, and they were exceedingly valiant for courage, and also for strength and activity; but behold, this was not all—they were men who were true at all times in whatsoever thing they were entrusted.  21 Yea, they were men of truth and soberness, for they had been taught to keep the commandments of God and to walk uprightly before him.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/53.p20-p21#p20"    
            },
            {
                day : 15,
                title : "CHOOSE THY ROAD",
                name : "Helaman 14:31",
                quote : "He hath given unto you that ye might know good from evil, and he hath given unto you that ye might choose life or death; and ye can do good and be restored unto that which is good, or have that which is good restored unto you; or ye can do evil, and have that which is evil restored unto you.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/53.p20-p21#p20"    
            },
            {
                day : 16,
                title : "CONQUER THY REBELLION",
                name : "Daniel 9:9",
                quote : "To the Lord our God belong mercies and forgivenesses, though we have rebelled against him;" ,
                link : "https://www.churchofjesuschrist.org/study/scriptures/ot/dan/9.p9#p9"   
            },
            {
                day : 17,
                title : "CHOOSE TO READ",
                name : "Mosiah 1:5",
                quote : "I say unto you, my sons, were it not for these things, which have been kept and preserved by the hand of God, that we might read and understand of his mysteries, and have his commandments always before our eyes, that even our fathers would have dwindled in unbelief, and we should have been like unto our brethren, the Lamanites,...",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/1.p5#p5"    
            },
            {
                day : 18,
                title : "CONSECRATE THY RICHES",
                name : "D&C 42:39",
                quote : "For it shall come to pass, that which I spake by the mouths of my prophets shall be fulfilled; for I will consecrate of the riches of those who embrace my gospel among the Gentiles unto the poor of my people who are of the house of Israel.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/42.p39#p39"    
            },
            {
                day : 19,
                title : "CORRECTED THROUGH REPENTANCE",
                name : "Alma 41:14",
                quote : "Therefore, my son, see that you are merciful unto your brethren; deal justly, judge righteously, and do good continually; and if ye do all these things then shall ye receive your reward; yea, ye shall have mercy restored unto you again; ye shall have justice restored unto you again; ye shall have a righteous judgment restored unto you again; and ye shall have good rewarded unto you again.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/41.p14#p14"    
            },
            {
                day : 20,
                title : "CONDUCT THROUGH REVERENCE",
                name : "D&C 109:21",
                quote : "And when thy people transgress, any of them, they may speedily repent and return unto thee, and find favor in thy sight, and be restored to the blessings which thou hast ordained to be poured out upon those who shall reverence thee in thy house.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/109.p21#p21"    
            },
            {
                day : 21,
                title : "COME TEACH REPENTANCE",
                name : "Helaman 7:17",
                quote : "O repent ye, repent ye! Why will ye die? Turn ye, turn ye unto the Lord your God. Why has he forsaken you?",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/hel/7.p17#p17"  
            },
            {
                day : 22,
                title : "CARRY-ON TESTIMONIAL REQUESTINGS",
                name : "1 Nephi 10:17",
                quote : "…I, Nephi, was desirous also that I might see, and hear, and know of these things, by the power of the Holy Ghost, which is the gift of God unto all those who diligently seek him, as well in times of old as in the time that he should manifest himself unto the children of men.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/1-ne/10.p17#p17"    
            },
            {
                day : 23,
                title : "COUNTED TIMES REDEEMED",
                name : "Mosiah 23:13",
                quote : "And now as ye have been delivered by the power of God out of these bonds; yea, even out of the hands of king Noah and his people, and also from the bonds of iniquity, even so I desire that ye should stand fast in this liberty wherewith ye have been made free, and that ye trust no man to be a king over you.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/23.p13#p13"    
            },
            {
                day : 24,
                title : "COMMUNICATE THROUGH RESPECT",
                name : "Alma 20:26",
                quote : "Because this is all that thou hast desired, that I would release thy brethren, and suffer that my son Lamoni should retain his kingdom, behold, I will grant unto you that my son may retain his kingdom from this time and forever; and I will govern him no more—",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/20.p26#p29"    
            },
            {
                day :25,
                title : "CHANGED THROUGH REBIRTH",
                name : "3 Nephi 9:20",
                quote : "And ye shall offer for a sacrifice unto me a broken heart and a contrite spirit. And whoso cometh unto me with a broken heart and a contrite spirit, him will I baptize with fire and with the Holy Ghost, even as the Lamanites, because of their faith in me at the time of their conversion, were baptized with fire and with the Holy Ghost, and they knew it not.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/9.p20#p20"    
            },
            {
                day : 26,
                title : "CHURCH TITLED REDEEMER",
                name : "3 Nephi 27:8",
                quote : "…but if it be called in my name then it is my church, if it so be that they are built upon my gospel.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/27.p8#p8"    
            },
            {
                day : 27,
                title : "CHRIST’S TYPE REVEALED",
                name : "Moroni 7:13",
                quote : "But behold, that which is of God inviteth and enticeth to do good continually; wherefore, every thing which inviteth and enticeth to do good, and to love God, and to serve him, is inspired of God.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/moro/7.p13#p13"    
            },
            {
                day : 28,
                title : "CHEERFUL THINKING RESULTS",
                name : "D&C 59:15",
                quote : "And inasmuch as ye do these things with thanksgiving, with cheerful hearts and countenances, not with much laughter, for this is sin, but with a glad heart and a cheerful countenance—",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/59.p15#p15"    
            },
            {
                day : 29,
                title : "CONSIDER THINGS RENDERED",
                name : "D&C 112:11",
                quote : "I know thy heart, and have heard thy prayers concerning thy brethren. Be not partial towards them in love above many others, but let thy love be for them as for thyself; and let thy love abound unto all men, and unto all who love my name.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/112.p11#p11"    
            },
            {
                day : 30,
                title : "CHANGED TO REBIRTH",
                name : "Romans 2:29",
                quote : "But he is a Jew, which is one inwardly; and circumcision is that of the heart, in the spirit, and not in the letter; whose praise is not of men, but of God.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/nt/rom/2.p29#p29"    
            },
            {
                day : 31,
                title : "CONSIDER TREASURES REMEMBERED",
                name : "D&C 89:19",
                quote : "And shall find wisdom and great treasures of knowledge, even hidden treasures;",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/89.p19#p19"    
            },
        ]
    },
    {
        month : 9,
        quotes :[
            {
                day : 1,
                title : "CHOOSE TO REIGN",
                name : "D&C 43:29",
                quote : "For in mine own due time will I come upon the earth in judgment, and my people shall be redeemed and shall reign with me on earth.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/43.p29#p29"    
            },
            {
                day : 2,
                title : "CHILDREN THAT REIGN",
                name : "Moroni 8:12",
                quote : "But little children are alive in Christ, even from the foundation of the world; if not so, God is a partial God, and also a changeable God, and a respecter to persons; for how many little children have died without baptism!",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/moro/8.p12#p12"    
            },
            {
                day : 3,
                title : "CONTROL TEMPERED REACTIONS",
                name : "Proverbs 15:18",
                quote : "A wrathful man stirreth up strife: but he that is slow to anger appeaseth strife.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/ot/prov/15.p18#p18"    
            },
            {
                day : 4,
                title : "COVENANT TO REBUILD",
                name : "D&C 98:14",
                quote : "Therefore, be not afraid of your enemies, for I have decreed in my heart, saith the Lord, that I will prove you in all things, whether you will abide in my covenant, even unto death, that you may be found worthy.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/98.p14#p14"    
            },
            {
                day : 5,
                title : "CEMENT THE ROOT",
                name : " Alma 32:41",
                quote : "But if ye will nourish the word, yea, nourish the tree as it beginneth to grow, by your faith with great diligence, and with patience, looking forward to the fruit thereof, it shall take root; and behold it shall be a tree springing up unto everlasting life.",
                link :"https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/32.p41#p41"    
            },
            {
                day : 6,
                title : "CARNAL THOUGHTS REPRESS",
                name : "2 Nephi 9:39",
                quote : "O, my beloved brethren, remember the awfulness in transgressing against that Holy God, and also the awfulness of yielding to the enticings of that cunning one. Remember, to be carnally-minded is death, and to be spiritually-minded is life eternal.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/9.p39#p39"    
            },
            {
                day : 7,
                title : "COUNT-ON TRIBES RETURNING",
                name : "D&C 113:10",
                quote : "We are to understand that the scattered remnants are exhorted to return to the Lord from whence they have fallen; which if they do, the promise of the Lord is that he will speak to them, or give them revelation...",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/113.p10#p10"    
            },
            {
                day : 8,
                title : "CONSIDER TRIBULATION REWARDING",
                name : "Alma 17:11",
                quote : "And the Lord said unto them also: Go forth among the Lamanites, thy brethren, and establish my word; yet ye shall be patient in long-suffering and afflictions, that ye may show forth good examples unto them in me, and I will make an instrument of thee in my hands unto the salvation of many souls.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/17.p11#p11"    
            },
            {
                day : 9,
                title : "COMMUNICATE TRUSTING RESPECT",
                name : "D&C 108:7",
                quote : "Therefore, strengthen your brethren in all your conversation, in all your prayers, in all your exhortations, and in all your doings.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/108.p7#p7"    
            },
            {
                day : 10,
                title : "CONNECT THROUGH READING",
                name : "3 Nephi 10:14",
                quote : "And now, whoso readeth, let him understand; he that hath the scriptures, let him search them, and see…",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/10.p14#p14"    
            },
            {
                day : 11,
                title : "CONSIDER THE RELIGION",
                name : "1 Nephi 13:37",
                quote : "And blessed are they who shall seek to bring forth my Zion at that day, for they shall have the gift and the power of the Holy Ghost; and if they endure unto the end they shall be lifted up at the last day, and shall be saved in the everlasting kingdom of the Lamb; and whoso shall publish peace, yea, tidings of great joy, how beautiful upon the mountains shall they be.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/1-ne/13.p37#p37",    
            },
            {
                day : 12,
                title : "CONGRATULATE THE REPENTANT",
                name : "1 Nephi 17:55",
                quote : "…We know of a surety that the Lord is with thee, for we know that it is the power of the Lord that has shaken us...wherefore, worship the Lord thy God, and honor thy father and thy mother, that thy days may be long in the land which the Lord thy God shall give thee.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/1-ne/17.p55#p55"    
            },
            {
                day :13,
                title : "CONTINUE THE RIGHT WAY",
                name : "2 Nephi 31:20",
                quote : "Wherefore, ye must press forward with a steadfastness in Christ, having a perfect brightness of hope, and a love of God and of all men. Wherefore, if ye shall press forward, feasting upon the word of Christ, and endure to the end, behold, thus saith the Father: Ye shall have eternal life.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/1-ne/17.p55#p55"    
            },
            {
                day : 14,
                title : "CONSIDER THE RESTITUTION",
                name : "Exodus 22:3",
                quote : "If the sun be risen upon him, there shall be blood shed for him; for he should make full restitution; if he have nothing, then he shall be sold for his theft.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/ot/ex/22.p3#p3"    
            },
            {
                day : 15,
                title : "COMMANDMENT THEN REWARD",
                name : "Mosiah 2:41",
                quote : "And moreover, I would desire that ye should consider on the blessed and happy state of those that keep the commandments of God. For behold, they are blessed in all things, both temporal and spiritual;...",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/2.p41#p41"    
            },
            {
                day : 16,
                title : "CIRCUMSTANCES TEACH RIGHT",
                name : "D&C 121:43",
                quote : "Reproving betimes with sharpness, when moved upon by the Holy Ghost; and then showing forth afterwards an increase of love toward him whom thou hast reproved, lest he esteem thee to be his enemy;",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/121.p43#p43"    
            },
            {
                day : 17,
                title : "CHOOSE TRUE REASONS",
                name : "D&C 121:41",
                quote : "No power or influence can or ought to be maintained by virtue of the priesthood, only by persuasion, by long-suffering, by gentleness and meekness, and by love unfeigned;",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/121.p41#p41"    
            },
            {
                day : 18,
                title : "CONTEMPLATE THY REACTION",
                name : "3 Nephi 2:1",
                quote : "…and the people began to forget those signs and wonders which they had heard, and began to be less and less astonished at a sign or a wonder from heaven, insomuch that they began to be hard in their hearts, and blind in their minds, and began to disbelieve all which they had heard and seen—",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/2.p1#p1"    
            },
            {
                day : 19,
                title : "CONVERT THROUGH RIGHTEOUSNESS",
                name : "Jacob 7:17",
                quote : "And it came to pass that on the morrow the multitude were gathered together; and he spake plainly unto them and denied the things which he had taught them, and confessed the Christ, and the power of the Holy Ghost, and the ministering of angels.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/jacob/7.p17#p17"    
            },
            {
                day : 20,
                title : "CONTINUE TRUSTING RELATIONSHIPS",
                name : "Daniel 3:28",
                quote : "Then Nebuchadnezzar spake, and said, Blessed be the God of Shadrach, Meshach, and Abed-nego, who hath sent his angel, and delivered his servants that trusted in him, and have changed the king’s word, and yielded their bodies, that they might not serve nor worship any god, except their own God.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/ot/dan/3.p28#p28"    
            },
            {
                day : 21,
                title : "COUPLES TEMPTED REPEATEDLY",
                name : "1 Cor. 7:33",
                quote : "But he that is married careth for the things that are of the world, how he may please his wife.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/nt/1-cor/7.p33#p33"    
            },
            {
                day : 22,
                title : "COUNSEL TEACHES RIGHTEOUSNESS",
                name : "2 Nephi 9:29",
                quote : "But to be learned is good if they hearken unto the counsels of God.", 
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/9.p29#p29"    
            },
            {
                day : 23,
                title : "CHILDREN TAUGHT RECONCILIATION",
                name : "2 Nephi 25:23",
                quote : "For we labor diligently to write, to persuade our children, and also our brethren, to believe in Christ, and to be reconciled to God; for we know that it is by grace that we are saved, after all we can do.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/25.p23#p23"    
            },
            {
                day : 24,
                title : "CONCERNING THE REBELLIOUS",
                name : "W of M 1:8",
                quote : "And my prayer to God is concerning my brethren, that they may once again come to the knowledge of God, yea, the redemption of Christ; that they may once again be a delightsome people.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/w-of-m/1.p8#p8"    
            },
            {
                day : 25,
                title : "COMPREHEND THROUGH REVELATION",
                name : "Mosiah 4:9",
                quote : "Believe in God; believe that he is, and that he created all things, both in heaven and in earth; believe that he has all wisdom, and all power, both in heaven and in earth; believe that man doth not comprehend all the things which the Lord can comprehend.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/4.p9#p9"    
            },
            {
                day : 26,
                title : "CHOOSE THE ROAD",
                name : "Mosiah 5:15",
                quote : "Therefore, I would that ye should be steadfast and immovable, always abounding in good works, that Christ, the Lord God Omnipotent, may seal you his...",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/5.p15#p15"    
            },
            {
                day : 27,
                title : "COMFORT THROUGH REQUESTING",
                name : "Alma 31:31",
                quote : "O Lord, my heart is exceedingly sorrowful; wilt thou comfort my soul in Christ. O Lord, wilt thou grant unto me that I may have strength, that I may suffer with patience these afflictions which shall come upon me, because of the iniquity of this people.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/31.p31#p31"    
            },
            {
                day : 28,
                title : "COVERED TABERNACLE REVEALED",
                name : "Ether 3:19",
                quote : "And because of the knowledge of this man he could not be kept from beholding within the veil; and he saw the finger of Jesus, which, when he saw, he fell with fear; for he knew that it was the finger of the Lord; and he had faith no longer, for he knew, nothing doubting.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/ether/3.p19#p19"    
            },
            {
                day : 29,
                title : "CONQUERED TRIBULATION REWARDED",
                name : "D&C 58:2",
                quote : "For verily I say unto you, blessed is he that keepeth my commandments, whether in life or in death; and he that is faithful in tribulation, the reward of the same is greater in the kingdom of heaven.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/58.p2#p2"    
            },
            {
                day : 30,
                title : "CONTINUING THANKFUL REWARDS",
                name : "D&C 78:19",
                quote : "And he who receiveth all things with thankfulness shall be made glorious; and the things of this earth shall be added unto him, even an hundred fold, yea, more.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/78.p19#p19"    
            },
        ]
    },
    {
        month : 10,
        quotes : [
            {
                day : 1,
                title : "CHURCH TEACHES RIGHTEOUSNESS",
                name : "3 Nephi 27:32",
                quote : "But behold, it sorroweth me because of the fourth generation from this generation, for they are led away captive by him even as was the son of perdition; for they will sell me for silver and for gold, and for that which moth doth corrupt and which thieves can break through and steal. And in that day will I visit them, even in turning their works upon their own heads.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/27.p32#p32"    
            },
            {
                day : 2,
                title : "COMMANDMENTS TEST REALITY",
                name : "D&C 29:35",
                quote : "Behold, I gave unto him that he should be an agent unto himself; and I gave unto him commandment, but no temporal commandment gave I unto him, for my commandments are spiritual; they are not natural nor temporal, neither carnal nor sensual.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/29.p35#p35"    
            },
            {
                day : 3,
                title : "COUNSEL THROUGH READING",
                name : "D&C 88:118",
                quote : "And as all have not faith, seek ye diligently and teach one another words of wisdom; yea, seek ye out of the best books words of wisdom; seek learning, even by study and also by faith.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/88.p118#p118"    
            },
            {
                day : 4,
                title : "CLEAR TO REACTIVATE",
                name : "D&C 42:88",
                quote : "And if thy brother or sister offend thee, thou shalt take him or her between him or her and thee alone; and if he or she confess thou shalt be reconciled.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/42.p88#p88"    
            },
            {
                day : 5,
                title : "CORRUPT THOUGHT RECYCLE",
                name : "Romans 2:15-16",
                quote : "15. Which shew the work of the law written in their hearts, their conscience also bearing witness, and their thoughts the mean while accusing or else excusing one another;)16. In the day when God shall judge the secrets of men by Jesus Christ according to my gospel.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/nt/rom/2.p15-p16#p15"    
            },
            {
                day : 6,
                title : "CONFIRM THROUGH READING",
                name : "Moroni 10:3",
                quote : "Behold, I would exhort you that when ye shall read these things, if it be wisdom in God that ye should read them, that ye would remember how merciful the Lord hath been unto the children of men, from the creation of Adam even down until the time that ye shall receive these things, and ponder it in your hearts.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/moro/10.p3#p3"   
            },
            {
                day : 7,
                title : "CONTINUE TEACHING RELIGION",
                name : "D&C 134:4",
                quote : "We believe that religion is instituted of God; and that men are amenable to him, and to him only.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/134.p4#p4"    
            },
            {
                day : 8,
                title : "CHRISTS TOLERATES REALITY",
                name : "D&C 67:13",
                quote : "Ye are not able to abide the presence of God now, neither the ministering of angels; wherefore, continue in patience until ye are perfected.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/67.p13#p13"    
            },
            {
                day : 9,
                title : "COURAGE TAKES RIGHTEOUSNESS",
                name : "Alma 56:45",
                quote : "And now I say unto you, my beloved brother Moroni, that never had I seen so great courage, nay, not amongst all the Nephites.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/56.p45#p45"    
            },
            {
                day : 10,
                title : "CHOOSE THE RIGHT",
                name : "1 Nephi 8:16",
                quote : "And it came to pass that they did come unto me and partake of the fruit also.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/1-ne/8.p16#p16"    
            },
            {
                day : 11,
                title : "CONDEMN THY REBELLIOUSNESS",
                name : "Isaiah 30:1",
                quote : "Woe to the rebellious children, saith the Lord, that take counsel, but not of me; and that cover with a covering, but not of my spirit, that they may add sin to sin:",
                link : "https://www.churchofjesuschrist.org/study/scriptures/ot/isa/30.p1#p1"    
            },
            {
                day : 12,
                title : "COMPANIONS TRUST RELIABLY",
                name : "D&C 135:6",
                quote : "“…henceforward their names will be classed among the martyrs of religion; and the reader in every nation will be reminded that the Book of Mormon, and this book of Doctrine and Covenants of the church, cost the best blood of the nineteenth century to bring them forth for the salvation of a ruined world;...",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/135.p6#p6"    
            },
            {
                day : 13,
                title : "COMING THE REDEEMER",
                name : "D&C 34:6",
                quote : "To lift up your voice as with the sound of a trump, both long and loud, and cry repentance unto a crooked and perverse generation, preparing the way of the Lord for his second coming.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/34.p6#p6"    
            },
            {
                day : 14,
                title : "CHOOSE TRUE REWARDS",
                name : "John 14:27",
                quote : "Peace I leave with you, my peace I give unto you: not as the world giveth, give I unto you. Let not your heart be troubled, neither let it be afraid.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/nt/john/14.p27#p27"    
            },
            {
                day : 15,
                title : "CHRISTIANITY TRULY RULES",
                name : "Alma 46:15",
                quote : "And those who did belong to the church were faithful; yea, all those who were true believers in Christ took upon them, gladly, the name of Christ, or Christians as they were called, because of their belief in Christ who should come.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/46.p15#p15"    
            },
            {
                day : 16,
                title : "CLIMB TO REIGN",
                name : "Luke 19:4",
                quote : "And he ran before, and climbed up into a sycomore tree to see him: for he was to pass that way.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/nt/luke/19.p4#p4"    
            },
            {
                day : 17,
                title : "COMMEND THY RIGHTEOUSNESS",
                name : "Romans 3:5",
                quote : "But if our unrighteousness commend the righteousness of God, what shall we say? Is God unrighteous who taketh vengeance? (I speak as a man).",
                link : "https://www.churchofjesuschrist.org/study/scriptures/nt/rom/3.p5#p5"    
            },
            {
                day : 18,
                title : "CONDITION THROUGH READING",
                name : "Moroni 10:3",
                quote : "Behold, I would exhort you that when ye shall read these things, if it be wisdom in God that ye should read them, that ye would remember how merciful the Lord hath been unto the children of men, from the creation of Adam even down until the time that ye shall receive these things, and ponder it in your hearts.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/moro/10.p3#p3"    
            },
            {
                day : 19,
                title : "CONTINUE TITHING RICHES",
                name : "Genesis 28:22",
                quote : "And this stone, which I have set for a pillar, shall be God’s house: and of all that thou shalt give me I will surely give the tenth unto thee.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/28.p22#p22"    
            },
            {
                day : 20,
                title : "CHILDREN THROUGH REPRODUCTION",
                name : "D&C 132:63",
                quote : "For they are given unto him to multiply and replenish the earth, according to my commandment, and to fulfil the promise which was given by my Father before the foundation of the world, and for their exaltation in the eternal worlds, that they may bear the souls of men; for herein is the work of my Father continued, that he may be glorified.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/132.p63#p63"    
            },
            {
                day : 21,
                title : "COULD TRIALS RAISE?",
                name : "1 Cor. 10:13",
                quote : "There hath no temptation taken you but such as is common to man: but God is faithful, who will not suffer you to be tempted above that ye are able; but will with the temptation also make a way to escape, that ye may be able to bear it.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/nt/1-cor/10.p13#p13"    
            },
            {
                day : 22,
                title : "CONVINCE TWO REMNANT",
                name : "2 Nephi 29:8",
                quote : "…Know ye not that the testimony of two nations is a witness unto you that I am God, that I remember one nation like unto another? Wherefore, I speak the same words unto one nation like unto another. And when the two nations shall run together the testimony of the two nations shall run together also.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/29.p8#p8"   
            },
            {
                day : 23,
                title : "COME THINK RIGHTEOUSLY",
                name : "Jacob 6:12",
                quote : "O be wise; what can I say more?",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/jacob/6.p12#p12"    
            },
            {
                day : 24,
                title : "COME THROUGH RIGHTEOUSNESS",
                name : "Mosiah 3:19",
                quote : "For the natural man is an enemy to God, and has been from the fall of Adam, and will be, forever and ever, unless he yields to the enticings of the Holy Spirit, and putteth off the natural man and becometh a saint through the atonement of Christ the Lord…",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/3.p19#p19"    
            },
            {
                day : 25,
                title : "CONSIDER TIME REMAINING",
                name : "Alma 12:24",
                quote : "…there was a space granted unto man in which he might repent; therefore this life became a probationary state; a time to prepare to meet God; a time to prepare for that endless state which has been spoken of by us, which is after the resurrection of the dead.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/12.p24#p24"    
            },
            {
                day : 26,
                title : "CAN’T THINK REVENGE",
                name : "3 Nephi 6:13",
                quote : "Some were lifted up in pride, and others were exceedingly humble; some did return railing for railing, while others would receive railing and persecution and all manner of afflictions, and would not turn and revile again, but were humble and penitent before God.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/6.p13#p13"    
            },
            {
                day : 27,
                title : "CHARITY TRULY REIGNS",
                name : "4 Nephi 1:15",
                quote : "And it came to pass that there was no contention in the land, because of the love of God which did dwell in the hearts of the people.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/4-ne/1.p15#p15"    
            },
            {
                day : 28,
                title : "COMMANDED THINGS REPEATEDLY",
                name : "D&C 58:26",
                quote : "For behold, it is not meet that I should command in all things; for he that is compelled in all things, the same is a slothful and not a wise servant; wherefore he receiveth no reward.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/58.p26#p26"    
            },
            {
                day : 29,
                title : "CAREFULLY TEACH REBELLIOUS",
                name : "D&C 100:7",
                quote : "But a commandment I give unto you, that ye shall declare whatsoever thing ye declare in my name, in solemnity of heart, in the spirit of meekness, in all things.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/100.p7#p7"    
            },
            {
                day : 30,
                title : "CHARACTER TOUCHES REDEEMER",
                name : "D&C 124:15",
                quote : "And again, verily I say unto you, blessed is my servant Hyrum Smith; for I, the Lord, love him because of the integrity of his heart, and because he loveth that which is right before me, saith the Lord.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/124.p15#p15"    
            },
            {
                day : 31,
                title : "CHOOSE TO RUN",
                name : "Genesis 39:12",
                quote : "And she caught him by his garment, saying, Lie with me: and he left his garment in her hand, and fled, and got him out.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/39.p12#p12"   
            },
        ]
    },
    {
        month : 11,
        quotes :[
            {
                day : 1,
                title : "CLING TO RIGHTEOUSNESS",
                name : "1 Nephi 20:18",
                quote : "O that thou hadst hearkened to my commandments—then had thy peace been as a river, and thy righteousness as the waves of the sea.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/1-ne/20.p18#p18"    
            },
            {
                day : 2,
                title : "COMPASSION TOUCHES REALISM",
                name : "Mosiah 19:14",
                quote : "And it came to pass that the Lamanites had compassion on them, for they were charmed with the beauty of their women.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/19.p14#p14"    
            },
            {
                day : 3,
                title : "CHOOSE TO RESPECT",
                name : "D&C 107:4",
                quote : "But out of respect or reverence to the name of the Supreme Being, to avoid the too frequent repetition of his name, they, the church, in ancient days, called that priesthood after Melchizedek, or the Melchizedek Priesthood.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/107.p4#p4"    
            },
            {
                day : 4,
                title : "CANCEL TELESTIAL REACTIONS",
                name : "D&C 76:111",
                quote : "For they shall be judged according to their works, and every man shall receive according to his own works, his own dominion, in the mansions which are prepared;",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/76.p111#p111"    
            },
            {
                day : 5,
                title : "COVENANT TO RECEIVE",
                name : "Mosiah 26:21",
                quote : "And he that will hear my voice shall be my sheep; and him shall ye receive into the church, and him will I also receive.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/26.p21#p21"    
            },
            {
                day : 6,
                title : "CREATE THY REJOICINGS",
                name : "2 Nephi 9:52",
                quote : "Behold, my beloved brethren, remember the words of your God; pray unto him continually by day, and give thanks unto his holy name by night. Let your hearts rejoice.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/9.p52#p52"    
            },
            {
                day : 7,
                title : "CONSIDER THANKS RENDERED",
                name : "Mosiah 2:20",
                quote : "I say unto you, my brethren, that if you should render all the thanks and praise which your whole soul has power to possess, to that God who has created you, and has kept and preserved you, and has caused that ye should rejoice, and has granted that ye should live in peace one with another—",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/2.p20#p20"    
            },
            {
                day : 8,
                title : "COMPASSION THROUGH REARING",
                name : "Matthew 20:34",
                quote : "So Jesus had compassion on them, and touched their eyes: and immediately their eyes received sight, and they followed him.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/nt/matt/20.p34#p34"    
            },
            {
                day : 9,
                title : "CONTINUE TOLERATING REBELLION",
                name : "Matthew 18:22",
                quote : "Jesus saith unto him, I say not unto thee, Until seven times: but, Until seventy times seven.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/nt/matt/18.p22#p22"    
            },
            {
                day : 10,
                title : "CONTENTIVE THOUGHTS RULE",
                name : "Hebrew 13:5",
                quote : "Let your conversation be without covetousness; and be content with such things as ye have: for he hath said, I will never leave thee, nor forsake thee.",
                link : 'https://www.churchofjesuschrist.org/study/scriptures/nt/heb/13.p5#p5'    
            },
            {
                day : 11,
                title : "CONTENT THROUGH REDEEMER",
                name : "Alma 29:3",
                quote : "But behold, I am a man, and do sin in my wish; for I ought to be content with the things which the Lord hath allotted unto me.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/29.p3#p3"    
            },
            {
                day : 12, 
                title : "CONSIDER THY REWARD",
                name : "Mosiah 2:41",
                quote : "And moreover, I would desire that ye should consider on the blessed and happy state of those that keep the commandments of God...",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/2.p41#p41"    
            },
            {
                day : 13,
                title : "COME TO REAP",
                name : "Rev. 14:15",
                quote : "And another angel came out of the temple, crying with a loud voice to him that sat on the cloud, Thrust in thy sickle, and reap: for the time is come for thee to reap; for the harvest of the earth is ripe.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/nt/rev/14.p15#p15"    
            },
            {
                day : 14,
                title : "CONSECRATE THY RECEIVINGS",
                name : "D&C 82:3",
                quote : "For of him unto whom much is given much is required; and he who sins against the greater light shall receive the greater condemnation.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/82.p3#p3"    
            },
            {
                day : 15,
                title : "COMPASSION THROUGH REMEMBERING",
                name : "Genesis 8:1",
                quote : "And God remembered Noah, and every living thing, and all the cattle that was with him in the ark: and God made a wind to pass over the earth, and the waters assuaged;",
                link : "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/8.p1#p1"    
            },
            {
                day : 16,
                title : "CONFLICTS THEN REMEMBRANCE",
                name : "Helaman 13:33",
                quote : "O that I had repented, and had not killed the prophets, and stoned them, and cast them out. Yea, in that day ye shall say: O that we had remembered the Lord our God in the day that he gave us our riches, and then they would not have become slippery that we should lose them; for behold, our riches are gone from us.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/hel/13.p33#p33"    
            },
            {
                day : 17,
                title : "CHRIST THROWS REWARDS",
                name : "D&C 54:10",
                quote : "And again, be patient in tribulation until I come; and, behold, I come quickly, and my reward is with me, and they who have sought me early shall find rest to their souls. Even so. Amen.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/54.p10#p10"    
            },
            {
                day : 18,
                title : "CHILDREN TEACH RIGHTEOUSNESS",
                name : "Matthew 18:4",
                quote : "Whosoever therefore shall humble himself as this little child, the same is greatest in the kingdom of heaven.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/nt/matt/18.p4#p4"    
            },
            {
                day : 19,
                title : "CONTINUE TRUSTING REDEEMER",
                name : "Mosiah 4:6",
                quote : "…that thereby salvation might come to him that should put his trust in the Lord, and should be diligent in keeping his commandments, and continue in the faith even unto the end of his life, I mean the life of the mortal body—",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/4.p6#p6"    
            },
            {
                day : 20,
                title : "CONCENTRATE THROUGH RIGHTEOUSNESS",
                name : "Omni 1:26",
                quote : "And now, my beloved brethren, I would that ye should come unto Christ, who is the Holy One of Israel, and partake of his salvation, and the power of his redemption. Yea, come unto him, and offer your whole souls as an offering unto him, and continue in fasting and praying, and endure to the end; and as the Lord liveth ye will be saved.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/omni/1.p26#p26"    
            },
            {
                day : 21,
                title : "CONTRIBUTE TO RIGHTEOUSNESS",
                name : "D&C 4:2",
                quote : "Therefore, O ye that embark in the service of God, see that ye serve him with all your heart, might, mind and strength, that ye may stand blameless before God at the last day.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/4.p2#p2"    
            },
            {
                day : 22,
                title : "COMING TOGETHER REIGNING",
                name : "Malachi 4:6",
                quote : "And he shall turn the heart of the fathers to the children, and the heart of the children to their fathers, lest I come and smite the earth with a curse.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/ot/mal/4.p6#p6"    
            },
            {
                day : 23,
                title : "CHOOSE TO RELAX",
                name : "D&C 101:16",
                quote : "Therefore, let your hearts be comforted concerning Zion; for all flesh is in mine hands; be still and know that I am God.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/101.p16#p16"    
            },
            {
                day : 24,
                title : "CHOOSE THE RESOURCE",
                name : "2 Nephi 4:34",
                quote : "O Lord, I have trusted in thee, and I will trust in thee forever. I will not put my trust in the arm of flesh; for I know that cursed is he that putteth his trust in the arm of flesh. Yea, cursed is he that putteth his trust in man or maketh flesh his arm.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/4.p34#p34"    
            },
            {
                day : 25,
                title : "CONSIDER THE RESTRAINT",
                name : "2 Nephi 20:15",
                quote : "Shall the ax boast itself against him that heweth therewith? Shall the saw magnify itself against him that shaketh it? As if the rod should shake itself against them that lift it up, or as if the staff should lift up itself as if it were no wood!",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/20.p15#p15"    
            },
            {
                day : 26,
                title : "CONTINUE THROUGH RESURRECTION",
                name : "Enos 1:27",
                quote : "And I soon go to the place of my rest, which is with my Redeemer; for I know that in him I shall rest. And I rejoice in the day when my mortal shall put on immortality, and shall stand before him; then shall I see his face with pleasure, and he will say unto me: Come unto me, ye blessed, there is a place prepared for you in the mansions of my Father. Amen.",
                link : 'https://www.churchofjesuschrist.org/study/scriptures/bofm/enos/1.p27#p27'    
            },
            {
                day : 27,
                title : "CONTENTION THWARTS REMEMBERING",
                name : "Mosiah 4:14",
                quote : "And ye will not suffer your children that they go hungry, or naked; neither will ye suffer that they transgress the laws of God, and fight and quarrel one with another, and serve the devil, who is the master of sin, or who is the evil spirit which hath been spoken of by our fathers, he being an enemy to all righteousness.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/4.p14#p14"    
            },
            {
                day : 28,
                title : "CONCEIVE THROUGH REBIRTH",
                name : "John 3:5",
                quote : "Jesus answered, Verily, verily, I say unto thee, Except a man be born of water and of the Spirit, he cannot enter into the kingdom of God.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/nt/john/3.p5#p5"    
            },
            {
                day : 29,
                title : "CONTENDING THWARTS REWARDS",
                name : "Alma 34:38",
                quote : "That ye contend no more against the Holy Ghost, but that ye receive it, and take upon you the name of Christ; that ye humble yourselves even to the dust, and worship God, in whatsoever place ye may be in, in spirit and in truth; and that ye live in thanksgiving daily, for the many mercies and blessings which he doth bestow upon you.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/34.p38#p38"    
            },
            {
                day : 30,
                title : "CONTROL THY RULINGS",
                name : "D&C 121:37",
                quote : "That they may be conferred upon us, it is true; but when we undertake to cover our sins, or to gratify our pride, our vain ambition, or to exercise control or dominion or compulsion upon the souls of the children of men, in any degree of unrighteousness, behold, the heavens withdraw themselves; the Spirit of the Lord is grieved; and when it is withdrawn, Amen to the priesthood or the authority of that man.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/121.p37#p37"    
            },
        ]
    },
    {
        month : 12,
        quotes : [
            {
                day : 1,
                title : "CLENCH THE ROD",
                name : "1 Nephi 8:24",
                quote : "And it came to pass that I beheld others pressing forward, and they came forth and caught hold of the end of the rod of iron; and they did press forward through the mist of darkness, clinging to the rod of iron, even until they did come forth and partake of the fruit of the tree.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/1-ne/8.p24#p24"    
            },
            {
                day : 2,
                title : "CHRIST’S TEACHINGS RIPPLE EFFECT",
                name : "Alma 29:8",
                quote : "For behold, the Lord doth grant unto all nations, of their own nation and tongue, to teach his word, yea, in wisdom, all that he seeth fit that they should have; therefore we see that the Lord doth counsel in wisdom, according to that which is just and true.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/1-ne/8.p24#p24"   
            },
            {
                day : 3,
                title : "CHOOSE TO REMEMBER",
                name : "Moroni 10:27",
                quote : "And I exhort you to remember these things; for the time speedily cometh that ye shall know that I lie not, for ye shall see me at the bar of God; and the Lord God will say unto you: Did I not declare my words unto you, which were written by this man, like as one crying from the dead, yea, even as one speaking out of the dust?",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/moro/10.p27#p27"    
            },
            {
                day : 4,
                title : "CHRIST THE REDEEMER",
                name : "Helaman 5:12",
                quote : "And now, my sons, remember, remember that it is upon the rock of our Redeemer, who is Christ, the Son of God, that ye must build your foundation; that when the devil shall send forth his mighty winds, yea, his shafts in the whirlwind, yea, when all his hail and his mighty storm shall beat upon you, it shall have no power over you to drag you down to the gulf of misery and endless wo, because of the rock upon which ye are built, which is a sure foundation, a foundation whereon if men build they cannot fall.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/hel/5.p12#p12"    
            },
            {
                day : 5,
                title : "CHARITY TEACHES RELATIONSHIPS",
                name : "2 Nephi 33:7",
                quote : "I have charity for my people, and great faith in Christ that I shall meet many souls spotless at his judgment-seat.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/33.p7#p7"    
            },
            {
                day : 6,
                title : "COMMAND TO REMEMBER",
                name : "D&C 27:2",
                quote : "For, behold, I say unto you, that it mattereth not what ye shall eat or what ye shall drink when ye partake of the sacrament, if it so be that ye do it with an eye single to my glory—remembering unto the Father my body which was laid down for you, and my blood which was shed for the remission of your sins.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/27.p2#p2"    
            },
            {
                day : 7,
                title : "COVENANT TO REMEMBER",
                name : "D&C 20 :77",
                quote : "O God, the Eternal Father, we ask thee in the name of thy Son, Jesus Christ, to bless and sanctify this bread to the souls of all those who partake of it, that they may eat in remembrance of the body of thy Son, and witness unto thee, O God, the Eternal Father, that they are willing to take upon them the name of thy Son, and always remember him and keep his commandments which he has given them; that they may always have his Spirit to be with them. Amen.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/20.p77#p77"    
            },
            {
                day : 8,
                title : "CHRIST THE REPRESENTOR",
                name : "Hebrew 9:24",
                quote : "For Christ is not entered into the holy places made with hands, which are the figures of the true; but into heaven itself, now to appear in the presence of God for us:",
                link : "https://www.churchofjesuschrist.org/study/scriptures/nt/heb/9.p24#p24"   
            },
            {
                day : 9,
                title : "CHEERFULNESS TOUCHES RECEIVERS",
                name : "Deut. 24:5",
                quote : "When a man hath taken a new wife, he shall not go out to war, neither shall he be charged with any business: but he shall be free at home one year, and shall cheer up his wife which he hath taken.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/ot/deut/24.p5#p5"    
            },
            {
                day : 10,
                title : "CHILDREN TAUGHT RIGHTEOUSNESS",
                name : "Alma 32:23",
                quote : "And now, he imparteth his word by angels unto men, yea, not only men but women also. Now this is not all; little children do have words given unto them many times, which confound the wise and the learned.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/32.p23#p23"    
            },
            {
                day : 11,
                title : "COMMEND TO REDEEMER",
                name : "Acts 14:23",
                quote : "And when they had ordained them elders in every church, and had prayed with fasting, they commended them to the Lord, on whom they believed.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/nt/acts/14.p23#p23"    
            },
            {
                day : 12,
                title : "CONTRIBUTE TO REJECTED",
                name : "Alma 32:12",
                quote : "I say unto you, it is well that ye are cast out of your synagogues, that ye may be humble, and that ye may learn wisdom; for it is necessary that ye should learn wisdom; for it is because that ye are cast out, that ye are despised of your brethren because of your exceeding poverty, that ye are brought to a lowliness of heart; for ye are necessarily brought to be humble.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/32.p12#p12"   
            },
            {
                day : 13,
                title : "COURT THE REDEEMER",
                name : "D&C 109:74",
                quote : "And be adorned as a bride for that day when thou shalt unveil the heavens, and cause the mountains to flow down at thy presence, and the valleys to be exalted, the rough places made smooth; that thy glory may fill the earth;",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/109.p74#p74"    
            },
            {
                day : 14,
                title : "COME TITHE RICHES",
                name : "Luke 18:12",
                quote : "I fast twice in the week, I give tithes of all that I possess.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/nt/luke/18.p12#p12"    
            },
            {
                day : 15,
                title : "CHRIST THE RESTER",
                name : "Matthew 11:28",
                quote : "Come unto me, all ye that labour and are heavy laden, and I will give you rest.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/nt/matt/11.p28#p28"    
            },
            {
                day : 16,
                title : "CHARITY TRULY REIGNS",
                name : "Moroni 7:47",
                quote : "But charity is the pure love of Christ, and it endureth forever; and whoso is found possessed of it at the last day, it shall be well with him.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/moro/7.p47#p47"    
            },
            {
                day : 17,
                title : "CONSIDER THY REDEEMER",
                name : "2 Nephi 33:11",
                quote : "And if they are not the words of Christ, judge ye—for Christ will show unto you, with power and great glory, that they are his words, at the last day; and you and I shall stand face to face before his bar; and ye shall know that I have been commanded of him to write these things, notwithstanding my weakness.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/33.p11#p11"    
            },
            {
                day : 18,
                title : "CLING TO RELATIVES",
                name : "Alma 43:47",
                quote : "And again, the Lord has said that: Ye shall defend your families even unto bloodshed. Therefore for this cause were the Nephites contending with the Lamanites, to defend themselves, and their families, and their lands, their country, and their rights, and their religion.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/43.p47#p47"    
            },
            {
                day : 19,
                title : "CREATE THE RELATIONSHIP",
                name : "D&C 88:63",
                quote : "Draw near unto me and I will draw near unto you; seek me diligently and ye shall find me; ask, and ye shall receive; knock, and it shall be opened unto you.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/88.p63#p63"    
            },
            {
                day : 20,
                title : "COME TOGETHER REDEEMED",
                name : "D&C 132:53",
                quote : "For I am the Lord thy God, and ye shall obey my voice; and I give unto my servant Joseph that he shall be made ruler over many things; for he hath been faithful over a few things, and from henceforth I will strengthen him.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/132.p53#p53"    
            },
            {
                day : 21,
                title : "CONDESCENSION THROUGH REDEEMER",
                name : "2 Nephi 4:26",
                quote : "O then, if I have seen so great things, if the Lord in his condescension unto the children of men hath visited men in so much mercy, why should my heart weep and my soul linger in the valley of sorrow, and my flesh waste away, and my strength slacken, because of mine afflictions?",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/4.p26#p26"    
            },
            {
                day : 22,
                title : "CHOOSE TO RADIATE",
                name : "Matthew 5:16",
                quote : "Let your light so shine before men, that they may see your good works, and glorify your Father which is in heaven.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/nt/matt/5.p16#p16"   
            },
            {
                day : 23,
                title : "COME TO REJOICE",
                name : "2 Nephi 9:52",
                quote : "Behold, my beloved brethren, remember the words of your God; pray unto him continually by day, and give thanks unto his holy name by night. Let your hearts rejoice.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/9.p52#p52"    
            },
            {
                day : 24,
                title : "COME TOWARD REDEEMER",
                name : "Mosiah 4:11",
                quote : "And again I say unto you as I have said before, that as ye have come to the knowledge of the glory of God, or if ye have known of his goodness and have tasted of his love, and have received a remission of your sins, which causeth such exceedingly great joy in your souls, even so I would that ye should remember, and always retain in remembrance, the greatness of God, and your own nothingness, and his goodness and long-suffering towards you, unworthy creatures, and humble yourselves even in the depths of humility, calling on the name of the Lord daily, and standing steadfastly in the faith of that which is to come, which was spoken by the mouth of the angel.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/4.p11#p11"    
            },
            {
                day : 25,
                title : "COME TO REDEEMER",
                name : "Mosiah 4:9",
                quote : "Believe in God; believe that he is, and that he created all things, both in heaven and in earth; believe that he has all wisdom, and all power, both in heaven and in earth; believe that man doth not comprehend all the things which the Lord can comprehend.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/4.p9#p9"    
            },
            {
                day : 26,
                title : "CONSISTED TINY REQUIREMENT",
                name : "Helaman 8:15",
                quote : "And as many as should look upon that serpent should live, even so as many as should look upon the Son of God with faith, having a contrite spirit, might live, even unto that life which is eternal.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/hel/8.p15#p15"    
            },
            {
                day : 27,
                title : "CLEANSED THROUGH RECEIVING",
                name : "3 Nephi 27:20",
                quote : "Now this is the commandment: Repent, all ye ends of the earth, and come unto me and be baptized in my name, that ye may be sanctified by the reception of the Holy Ghost, that ye may stand spotless before me at the last day.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/27.p20#p20"    
            },
            {
                day : 28,
                title : "CALLED THROUGH REVELATION",
                name : "D&C 18:14",
                quote : "Wherefore, you are called to cry repentance unto this people.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/18.p14#p14"    
            },
            {
                day : 29,
                title : "CHARITY TOWARD REMNANT",
                name : "Moroni 7:45",
                quote : "And charity suffereth long, and is kind, and envieth not, and is not puffed up, seeketh not her own, is not easily provoked, thinketh no evil, and rejoiceth not in iniquity but rejoiceth in the truth, beareth all things, believeth all things, hopeth all things, endureth all things.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/bofm/moro/7.p45#p45"    
            },
            {
                day : 30,
                title : "CUTTETH THE ROCK",
                name : "D&C 65:2",
                quote : "The keys of the kingdom of God are committed unto man on the earth, and from thence shall the gospel roll forth unto the ends of the earth, as the stone which is cut out of the mountain without hands shall roll forth, until it has filled the whole earth.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/65.p2#p2"    
            },
            {
                day : 31,
                title : "CHOOSE TO RECEIVE",
                name : "D&C71:6",
                quote : "For unto him that receiveth it shall be given more abundantly, even power.",
                link : "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/71.p6#p6"    
            },
        ]
    }
];

export default quotes;