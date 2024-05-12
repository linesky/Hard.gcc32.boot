jmp esc
hello: db "hello world...."
esc:
push hello
pop rax
ret