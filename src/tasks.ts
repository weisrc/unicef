import { Task } from "./builder";

export const tasks: Task[] = [
    {
        id: "worker",
        x: 400,
        y: 150,
        dialog: {
            title: "Jean François",
            content: `Bonjour, je suis …, ah vous ne comprenez pas? Alors utilisez le traducteur universel.
            As I was saying my name is …, I am a worker from France. You may not know this, but there are many languages in this world. In fact, there are more than six thousand unique languages. Your’s is just one of many, and every one of them deserves to be protected along with the culture behind it, even if you don’t understand or like it.`,
        }
    },
    {
        id: "princess",
        x: 750,
        y: 175,
        dialog: {
            title: "Xiang Ling",
            content: "Ni hao, I am the imperial princess of China. I govern the state of Xia. I am also one of the board members of the school of Xia. Here, we believe that education is key to the prosperity of humanity. In fact, we believed that education should be a constitutional right. So, as the princess, I made it a law. Luckily for us, that law passed the test of time. In the present time, if one wishes to be educated, he is encouraged to go. So if you want to go to school, no one can stop you! "
        }
    },
    {
        id: "worker",
        x: 475,
        y: 200,
        dialog: {
            title: "Adam",
            content: "Boker tov, I am a villager from the country of israel. But, please wait a moment, I must complete my prayer first. (...) I pray to Yahweh, do you know him? Well there’s a good chance you don’t, no worries. There are many religions in this world, mine is Judaism. What is your’s? You don’t need to know all of them. You just need to know that everyone has the right to believe in any religion."
        }
    },
    {
        id: "princess",
        x: 100,
        y: 225,
        dialog: {
            title: "Dora",
            content: "Hola soy dora, you look young, how old are you? Did you know that a child is any person under the age of 18 is considered a child? Also do you know children have rights? In fact Unicef has made a convention describing the 54 rights all children have. It is imperative that your parents know these laws to be sure they’re not transgressing these laws."
        }
    },
    {
        id: "old-man",
        x: 750,
        y: 75,
        dialog: {
            title: "Maksym",
            content: "Privet comrade, I am a russian. Are you thirsty or hungry? Come to my home for a night and have this russian pancake. Any child has the right to eat and shelter. You will always be welcomed to my humble abode. And if I'm not at home for some reason, you can always seek help from our leader Putin as it is his duty."
        }
    },
    {
        id: "villager-man",
        x: 200,
        y: 150,
        dialog: {
            title: "Jacob",
            content: "Hello hello, how are you? I am a canadian. Do you like the internet? It is indeed quite the place. There is almost everything there. It is said that knowledge can be found everywhere, but with the invention of the internet, that statement has never been more true. Entertainment can also be easily found there. However, one must also be wary. Because anonymity is a key part of the internet, cyber bullying is becoming commonplace. As a child, you must be careful."
        }
    }, 
    {
        id: "queen",
        x: 450,
        y: 350,
        dialog: {
            title: "Sarah",
            content: "Howzit, I am the queen of South africa. My child, the princess of South Africa, has made me realize how precious the bond between parent and children is. And so, I have decided that no matter what happens, a parent and his child must never be separated unless the child isn’t properly looked after. And so, Unicef has decided to adopt this law as part of the 54 right of children. "
        }
    }
]