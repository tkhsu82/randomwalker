from PIL import Image, ImageEnhance
from PIL import ImageFilter
import webbrowser

im = Image.open('img/rem-koolhaas.jpg') 
im.show()

imageSharpen1 = im.filter(ImageFilter.SHARPEN)
imageSharpen2 = imageSharpen1.filter(ImageFilter.SHARPEN)

#imageSharpen1.show()
#imageSharpen2.show()

scaleValue = 5

finalImage = ImageEnhance.Contrast(imageSharpen2).enhance(scaleValue)
finalImage.show()
finalImage.save('img/rem-koolhaas-enhanced.jpg')

#pixel_values = list(finalImage.getdata())
#print (pixel_values)

url = 'index.html'
webbrowser.open(url='http://127.0.0.1:5500/', new=2)