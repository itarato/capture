# Capture

Have you ever wanted to see how a design is evolving? Looking at every single improvement you applied on a website? With this little tool you can capture the whole flow in a GIF animation.

![Example](https://dl.dropboxusercontent.com/u/2629592/result.gif "Silly example")


Requirements
------------

* PhantomJS (http://phantomjs.org/download.html)

Currently only tested on OS-X.


Installation
------------

* make sure PhantomJS is enable (execute phantomjs in your terminal - then quit)
* on your web project's .git/hooks/pre-commit file add the content of the pre-commit file:

```shell
#########################################################
# Pre-commit hook script to add to your pre-commit file.

# Configuration:
CAPTURE_JS_PATH=<PATH_TO_CAPTURE>/capture/capture.js
CAPTURE_URL=http://<WEBSITE_URL>
CAPTURE_SCREENSHOT_DIR=<FOLDER_TO_STORE_SCREENSHOTS>/
CAPTURE_RESULT_GIF=<PATH_TO_SAVE_RESULT>/result.gif

# Generate screenshot.
phantomjs $CAPTURE_JS_PATH $CAPTURE_URL $CAPTURE_SCREENSHOT_DIR;

# Create GIF animation.
convert -delay 32 -loop 0 ${CAPTURE_SCREENSHOT_DIR}*.png $CAPTURE_RESULT_GIF;
#########################################################
```

* change the 4 config variables
..* CAPTURE_JS_PATH - where this repo's capture.js is
..* CAPTURE_URL - the absolute public accessible URL of your website
..* CAPTURE_SCREENSHOT_DIR - the folder to save the screenshots into (not /tmp/*), it should be permanent
..* CAPTURE_RESULT_GIF - the file path for the result gif
* make sure if the pre-commit file is executable

```shell
chmod u+x .git/hooks/pre-commit
```

* make a change on your project and commit it
..* you should see a screenshot and a generated gif file
