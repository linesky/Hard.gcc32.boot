global M_PI
global sinTable
global cosTable
M_PI:float=3.14159265359
sinTable = [0.000000, 0.104528, 0.207912, 0.309017, 0.406737, 0.500000, 0.587785, 0.669131, 0.743145, 0.809017, 0.866025, 0.913545, 0.951057, 0.978148, 0.994522, 1.000000, 0.994522, 0.978148, 0.951057, 0.913545, 0.866025, 0.809017, 0.743145, 0.669131, 0.587785, 0.500000, 0.406737, 0.309017, 0.207912, 0.104528, 0.000000, -0.104528, -0.207912, -0.309017, -0.406737, -0.500000, -0.587785, -0.669131, -0.743145, -0.809017, -0.866025, -0.913545, -0.951057, -0.978148, -0.994522, -1.000000, -0.994522, -0.978148, -0.951057, -0.913545, -0.866025, -0.809017, -0.743145, -0.669131, -0.587785, -0.500000, -0.406737, -0.309017, -0.207912, -0.104528, -0.000000]
cosTable= [1.000000, 0.994522, 0.978148, 0.951057, 0.913545, 0.866025, 0.809017, 0.743145, 0.669131, 0.587785, 0.500000, 0.406737, 0.309017, 0.207912, 0.104528, 0.000000, -0.104528, -0.207912, -0.309017, -0.406737, -0.500000, -0.587785, -0.669131, -0.743145, -0.809017, -0.866025, -0.913545, -0.951057, -0.978148, -0.994522, -1.000000, -0.994522, -0.978148, -0.951057, -0.913545, -0.866025, -0.809017, -0.743145, -0.669131, -0.587785, -0.500000, -0.406737, -0.309017, -0.207912, -0.104528, -0.000000, 0.104528, 0.207912, 0.309017, 0.406737, 0.500000, 0.587785, 0.669131, 0.743145, 0.809017, 0.866025, 0.913545, 0.951057, 0.978148, 0.994522]

def abs(x:float) :
    xx=x
    if xx<0:
        xx=-x
    return xx

def getPI():
    global M_PI
    return M_PI

def cos(x:int):
    global cosTable 
    return cosTable[x]


def sin(x:int):
    global sinTable
    return sinTable[x]


def calcX(angle:int):
  return sin(angle)


def calcY(angle:int): 
  return cos(angle)


print("\x1bc\x1b[43;37m]")
r=range(0,360,6)
for n in r:
   print(str(n)+"="+str(sin(n//6)))