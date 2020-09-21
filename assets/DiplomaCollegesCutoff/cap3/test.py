import os 

outputString = ""
filePath = "./"

for elem in os.listdir(filePath):
    if elem[-3:] == "pdf":
        outputString += "<a href="+elem+">++</a>\n"

f = open("outputFile.html","w+")
f.write(outputString)
f.close
