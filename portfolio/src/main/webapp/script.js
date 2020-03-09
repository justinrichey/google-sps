// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

function displayText(pageType) {
    window.location = pageType + ".html";
}

function getMessage() {
    fetch("/data").then(response => response.json()).then(responseObj => {
        var commentString = "\n"; //Initializing string containing comments

        //Converts the array argument to string form for display
        for(comment in responseObj.comments) {
            var commentOrder = responseObj.comments.length - comment;
            var score = responseObj.scores[comment];
            var sentimentStr;

            commentString = commentString + "Comment " + commentOrder;

            if (score > 0.4) {
                sentimentStr = "(Positive Sentiment)";
            } else if (score < -0.4) {
                sentimentStr = "(Negative Sentiment)";
            } else {
                sentimentStr = "(Neutral Sentiment)";
            }

            commentString = commentString + " " + sentimentStr + ":\n";
            commentString = commentString + responseObj.comments[comment] + "\n\n";
        }

        document.getElementById("message-container").innerText = commentString;
    });
}
