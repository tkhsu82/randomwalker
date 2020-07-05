from PIL import Image, ImageEnhance
from PIL import ImageFilter
import webbrowser
"""
im = Image.open("https://raw.githubusercontent.com/tkhsu82/randomwalker/master/Random_walk_line/img/art.jpg") 
im.show()

imageSharpen1 = im.filter(ImageFilter.SHARPEN)
imageSharpen2 = imageSharpen1.filter(ImageFilter.SHARPEN)

imageSharpen1.show()
imageSharpen2.show()

scaleValue = 5

finalImage = ImageEnhance.Contrast(imageSharpen2).enhance(scaleValue)
finalImage.show()
finalImage.save("https://raw.githubusercontent.com/tkhsu82/randomwalker/master/Random_walk_line/img/art.jpg")

#pixel_values = list(finalImage.getdata())
#print (pixel_values)
"""
url = 'index.html'
webbrowser.open(url, new=1)

