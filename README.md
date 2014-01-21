# Capture

Have you ever wanted to see how a design is evolving? Looking at every single improvement you applied on a website? With this little tool you can capture the whole flow in a GIF animation.


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