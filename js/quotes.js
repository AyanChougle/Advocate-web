function genQuote() {
        var quotes = [
            "The most powerful weapon in the world is the human soul on fire. - Ferdinand Foch",
            "Never doubt that a small group of thoughtful, committed citizens can change the world; indeed, it's the only thing that ever has. - Margaret Mead",
            "The function of freedom is to free someone else. - Toni Morrison",
                "The most powerful weapon in the world is the human soul on fire. - Ferdinand Foch",
                "Never doubt that a small group of thoughtful, committed citizens can change the world; indeed, it's the only thing that ever has. - Margaret Mead",
                "The function of freedom is to free someone else. - Toni Morrison",
                "You must be the change you wish to see in the world. - Mahatma Gandhi",
                "The time is always right to do what is right. - Martin Luther King Jr.",
                "Injustice anywhere is a threat to justice everywhere. - Martin Luther King Jr.",
                "If you don't stand for something, you will fall for anything. - Malcolm X",
                "The only way to deal with fear is to face it head on. - Nelson Mandela",
                "If you want to go fast, go alone. If you want to go far, go together. - African Proverb",
                "Our lives begin to end the day we become silent about things that matter. - Martin Luther King Jr.",
                "You can't separate peace from freedom because no one can be at peace unless he has his freedom. - Malcolm X",
                "The power of the people is greater than the people in power. - Wael Ghonim",
                "It's not about perfect. It's about effort. And when you bring that effort every single day, that's where transformation happens. That's how change occurs. - Jillian Michaels",
                "You don't have to be great to start, but you have to start to be great. - Zig Ziglar",
                "There is no greater agony than bearing an untold story inside you. - Maya Angelou",
                "Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the change that we seek. - Barack Obama",
                "Be the change you wish to see in the world. - Mahatma Gandhi",
                "If you want to change the world, pick up your pen and write. - Martin Luther King Jr.",
                "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
                "The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge. - Stephen Hawking",
                "Speak your mind even if your voice shakes. - Maggie Kuhn",
                "Advocacy is an essential tool to protect the rights of people who are marginalized, oppressed, or excluded. - Ban Ki-moon",
                "The only thing necessary for the triumph of evil is for good men to do nothing. - Raju Lohar",
                "Human progress is neither automatic nor inevitable... Every step toward the goal of justice requires sacrifice, suffering, and struggle; the tireless exertions and passionate concern of dedicated individuals. - Martin Luther King Jr.",
                "Courage doesn't always roar. Sometimes courage is the quiet voice at the end of the day saying, 'I will try again tomorrow.' - Mary Anne Radmacher",
                "Change does not roll in on the wheels of inevitability - Siddique John Cena"
        ];
      
        var randomIndex = Math.floor(Math.random() * quotes.length);
        var randomQuote = quotes[randomIndex];
        alert(randomQuote);
    }