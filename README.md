# Website (Deprecated)
This website is now unmaintained due to ApostropheCMS now requiring versions of mongodb be 2.6 and above. My website ran on a raspberry pi which is is an ARM device with a 32 bit CPU, and mongodb discontinued support for 32 bit devices therefore I cannot run this website without having to upgrade my hardware. I will solely publish all my works on Github, which I already do anyways, but I will now additionally add commentary that used to only exist on my website.

### Link
~~https://ariqhaqq.com~~

### Screenshots
![Screenshot-2020-12-23-13-23-52.png](https://i.ibb.co/0CWY3cK/Screenshot-2020-12-23-13-23-52.png)
![Screenshot-2020-12-23-13-24-14.png](https://i.ibb.co/ZBrSwL7/Screenshot-2020-12-23-13-24-14.png)
![Screenshot-2020-12-23-13-39-20.png](https://i.ibb.co/rZ23kcm/Screenshot-2020-12-23-13-39-20.png)

## Purpose 
I created this website to demonstrate some of the skills that I have accumulated, such as programming, Linux shell commands, and general web knowledge and also showcase some of my other projects in a more robust way. I also did this to challenge myself and to learn just how exactly a website is created!

## Requirements
There were certain requirements that I wanted to have for this website, some of which were ambitious- considering that this is the first time I am creating a website for the entire world to see.

The main requirement that I wanted to have for this website to be easily changed, and editable. Meaning that I could easily add pages, edit content, etc. Without having to go and change any code. I was able to achieve this using a pre-built Content Mangement System (CMS) called [ApostropheCMS](https://apostrophecms.org/) which enabled me to achieve many of the characteristics of the website that I wanted.

The second requirement that I wanted is that I wanted the website to be accessible from as many devices as possible, meaning mobile support was necessary. Fortunately, I knew a solution already, called [Bootstrap](https://getbootstrap.com/), which is a CSS framework that supports mobile. Meaning that I whatever styling I did, would automatically be adjusted for mobile, making development much easier and also just making the entirety of the website look better.

## Website Development
The first part of creating a website is creating the actual website! To create this website I utilized [Node.js](https://nodejs.org/en/) and [NPM](https://www.npmjs.com/), with ApostropheCMS being my main tool for designing this website. Using ApostropheCMS was definitely a learning curve for me. It used HTML templating, which I never used before and the whole system itself was confusing at first. After many attempts, reading manuals, and trial & error I was able to get a working prototype. Which I later posted on GitHub for later deployment.

## Server Development
Designing the website was definitely difficult, but it was well worth learning how to use Node.js and ApostropheCMS in order to create a quality website. But developing the website did not take the significant portion of my time on this project, but rather creating a server in order to properly host it. This is where I learned the most about the Internet.

The first problem is finding a dedicated piece of hardware to host my website. One solution was to buy a droplet from [DigitalOcean](https://www.digitalocean.com/products/droplets/), which provided a full-blown Linux environment. For my purposes, I do not need so much memory or CPU, so getting a droplet would be excessive. Additionally, the price, even at the lowest option, was not in my budget. So my second solution was instead to buy a [Raspberry Pi](https://www.raspberrypi.org/) and simply host it on my home network. This is what I ended up applying, but it opened a plethora of problems which I had to solve.

After setting up my Raspberry Pi (in it of itself was a hassle) and then locally hosted the website on the Raspberry Pi. This where the majority of the problems came into play. The first issue was having to port forward the IP of my home network to my Raspberry Pi, at first, I simply connected to my website outside the network via IP address. This issue was that port 80, the default port that websites are hosted on, is blocked due to my ISP (inbound traffic). This meant that in order to connect to my website was to manually specify the port, which was not optimal. So my connection looked something like this (with dummy IP addresses):

![Website-Ports-Blocked](https://i.ibb.co/Sr4fksS/Website-Ports-Blocked.png)

Afterward, I purchased a domain name and set it up to have it so that I could have it so instead of manually typing in my public IP, one could simply just type the domain name. This only makes my website more accessible and doesn't resolve the whole blocked port issue that I did not anticipate.

There was another issue that also needed to be resolved- security. In order to edit the content on my website, I need to log in using a password. This means I have to encrypt the HTTP connections. Obtaining a free CA certificate is not too difficult and I would've partially solved my blocked port 80 issue. HTTPS connections by default are port 443, which inbound traffic was allowed by my ISP. So instead of specifying the port, clients would only have to specify that the connection was HTTPS, and the browser would automatically default to port 443. Again, not optimal, because it relies on the user knowing this information beforehand.

So after a lot of research, I was able to find a very successful solution, which not only resolved this issue, it also benefitted the entire project. What I ended up using was a service called [Cloudflare](https://www.cloudflare.com/). Using this service enabled me to do two things, one being able to receive a "proxy server" and two being able to get SSL connections for my website.

The way that Cloudflare works is that it once I change my previous nameservers to theirs, I can get many of the privileges of their "system". One of which is enabling it so that any HTTP traffic gets automatically redirected to HTTPS traffic. This is exactly what I needed, a sort of proxy server that would appropriately redirect traffic so that the port 80 on my home network is not even touched. This is on top of that is the added bonus that my public IP is hidden, so nobody can inspect other services that could be potentially be exploited or hacked that is running on our home network.

The SSL connection is the other job that this service accomplishes. Instead of installing a public CA certificate, I instead get a certificate from Cloudflare which provides an SSL connection from my server to Cloudflare's servers. Then a separate SSL connection is created to the client and their network. This is what my setup looks at the very end:

![Website-Ports-Solution](https://i.ibb.co/vhrmxJG/Website-Ports-Solution.png)

## Conclusion
This project has gotten me to understand the complexity and the beauty of the Internet and forced me to really get into website development on a very fundamental level, with me manually installing certificates and setting up port forwarding rules. Attempting to make a personal website on a home network was challenging but I was able to pull through with a fairly clean and reliable solution.
