//your code here
function countWords() {
			let text = document.getElementById("evaluatedText").value;
			let wordCount = 0;
			if (text.trim() !== "") {
				wordCount = text.trim().split(/\s+/).length;
			}
			document.getElementById("wordCount").innerHTML = wordCount;
		}