function karaokeEffect(paragraph, index) {
            if (index < paragraph.length) {
                var partPara = paragraph.slice(0, index).join(' ');
                var remainPara = paragraph.slice(index + 1).join(' ');
                var karaokePara = partPara + " " + '<span class="highlight">' + paragraph[index] + '</span> ' + remainPara;
                document.getElementById("karaokeParagraph").innerHTML = karaokePara;

                index++;
                setTimeout(() => {
                    karaokeEffect(paragraph, index);
                }, 1000); // Thời gian chờ giữa các từ 
            }else {
                setTimeout(() => {
                    karaokeEffect(paragraph, 0);
                }, 2000)}
        }
var originalPara = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur nulla, debitis sit, quia exercitationem dolor quo soluta aliquam quisquam sunt quasi praesentium sint laboriosam consequatur. Vitae necessitatibus nisi nulla a!";
var paragraph = originalPara.split(' ');
karaokeEffect(paragraph, 0);
