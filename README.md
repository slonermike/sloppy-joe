# sloppy-joe
Front-end for backend-less blog.

To use Sloppy Joe, check out the repo for the "backend" for Sloppy Joe, [Lunchlady](https://github.com/slonermike/lunchlady), which includes instructions on how to build out your blog and run locally.  Lunchlady will automatically pull in sloppy joe and apply your content in it.

## What is this?
Sloppy Joe is a blog front-end which relies on static data output by its counterpart Nodejs tool [Lunchlady](https://github.com/slonermike/lunchlady).  It's built with the React framework powered by Redux.

## How does it work?
[Lunchlady](https://github.com/slonermike/lunchlady) outputs a JSON file containing the minimal metadata for your blog entries (title, date, tags, etc).  This file is baked into your app via webpack and accessed directly by the app, which runs on the front-end.  The content of each entry is represented in an HTML file which is retrieved via XHR at runtime.

## What's wrong with you?  Why would you do this?
One question at a time please!  First, I'm a weird person and constraints make personal projects far more compelling.

Second question, a few years ago I picked up some super-cheap web hosting for like $20/year, which I prepaid years in advance.  Unfortunately, this web server only supports PHP backends, as they seem to expect literally everyone to use Wordpress.  Wordpress is bloated and PHP is the devil, and I was looking for an excuse to learn Nodejs.

Most blog software is WAY overengineered for what I need.  I don't want people to leave comments.  I don't need a WYSIWYG editor.  I just need the ability to write something and put it on the internet.  That hardly necessitates a backend.  Hence, Lunchlady and her Sloppy Joe counterpart.

Enjoy!
