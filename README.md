# x64.simulator

this is a x64 simulator but only yet have nop and mov  add  sub  mul div or instrution yet
reset to start after modify the code
on c call exemple in real hardware you must put call beford
like "call puts"


exemples:


clc

stc

clz


stz



std


cld



MOV RAX,10


MOV CLEAR,0

MOV SET,1

MOV INC,1

MOV RBX,4

MOV VAR1,RAX


ADD VAR1,RAX


SUB RAX,RBX

MUL RAX,RBX


DIV RAX,RBX

AND RAX,RBX

OR RAX,RBX



INC RAX

mov rcx,19


loop:

dec rcx

cmp rcx,0



jnz loop 



call func



jmp ends


data1: db "hello world",0


func1:



mov rax,1



ret

ends:


ret
