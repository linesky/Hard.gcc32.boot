var programs="";
var args="";
var pc=0;
var variables=["RAX","RBX","RCX","RDX"];
var values=[0,0,0,0];
function starts(){
    var codeInput = document.getElementById('codeInput');
    var n=0;
    pc=0;
    variables=["RAX","RBX","RCX","RDX"];
    values=[0,0,0,0];
    programs=splitCodeByLine(codeInput.value);
    // Create an Option object
    // Add the option to the listbox
   
    updateVariableInList();


}
// Função para separar código por linha
function splitCodeByLine(code) {
    return code.split('\n');
}

// Função para separar linha atual por vírgulas
function splitCurrentLineByCommas(line) {
    var spt=line.split(',');
    var sss=[];
    var n=0;
    for(n=0;n<spt.length;n++){
        var s=""+spt[n].toString();
        var ss=""+s.trim();
        ss=ss.toUpperCase();
        sss.push(ss);
    }
    
    return sss;
}

// Verifica se um parâmetro é numérico ou alfanumérico
function isNumericOrAlphanumeric(param) {
    if(param.length>0){
        if (param[0]>='0' && param[0]<='9') return true;
    }
    return false;
}

// Código para adicionar variáveis à lista de código
function addVariableToList(variable) {
    if (!variableExists(variable)) {
        variables.push(variable);
        values.push(0);
        // Adicionar variável à lista
        // Implemente esta função de acordo com a lógica de sua aplicação
       
    }
}

// Função para verificar se a variável já existe na lista
function variableExists(variable) {
    // Implemente a lógica para verificar se a variável já existe na lista
    var n=0;
    var nn=variables.length;
    for(n=0;n<nn;n++){
        if(variables[n]==variable)return true;
    } 
    return false;
}
function variableIndex(variable) {
    // Implemente a lógica para verificar se a variável já existe na lista
    var n=0;
    var nn=variables.length;
    for(n=0;n<nn;n++){
        if(variables[n]==variable)return n;
    } 
    return False;
}

// Código para obter o valor da lista de código de variáveis
function getValueFromVariableList(variable) {
    // Implemente a lógica para obter o valor da variável na lista
    var n=0;
    var nn=variables.length;
    for(n=0;n<nn;n++){
        if(variables[n]==variable){
            return values[n];
        }
    } 
    return False;

}

// Código para alterar variável na lista
function updateVariableInList() {
    // Implemente a lógica para atualizar o valor da variável na lista
    lists=document.getElementById("variableList");
    var n=0;
    var nn=variables.length;
    var nnn=0;
    
    var i, L = lists.options.length - 1;
    for (i = L; i >= 0; i--) {
        lists.remove(i);
    }



    for(n=0;n<nn;n++){
        var option = document.createElement("option");
        
        option.text = variables[n]+"="+values[n].toString();
        


        lists.add(option);
    }
    var RAX = document.getElementById('raxValue');
    var RBX = document.getElementById('rbxValue');
    var RCX = document.getElementById('rcxValue');
    var RDX = document.getElementById('rdxValue');


    RAX.textContent=values[0].toString();
    RBX.textContent=values[1].toString();
    RCX.textContent=values[2].toString();
    RDX.textContent=values[3].toString();  
    
}

// Separar a função por vírgulas e parâmetros
function splitFunctionByCommasAndParams(func) {
    // Implemente a lógica para separar a função por vírgulas e parâmetros
}

// Função de reset
document.getElementById('resetButton').addEventListener('click', function() {
    // Implemente a lógica de reset
    starts();
});
window.onload = function() {
     starts();

};
// Processo seguinte
document.getElementById('nextButton').addEventListener('click', function() {
    // Implemente a lógica do próximo passo
    var nn=variables.length;
    var nnx=programs.length;
    debugs=document.getElementById("instructionList");
    
    debugs.textContent=programs[pc];
    var iiii=1;
    var vals=0;
   
    if(pc<nnx){
        
        args=splitCurrentLineByCommas(programs[pc]);
        
        
        if(args.length>0){
            
            if (args[0]=="NOP" && args.length>0){
                
                iiii=0;
            }
            if (args[0]=="MOV" && args.length>2){
                
                if (isNumericOrAlphanumeric(args[2])){
                    
                    vals=parseInt(args[2]);
                    
                }else{
                    if(variableExists(args[2])){
                        vals=getValueFromVariableList(args[2]);
                    }else{
                        debugs.textContent=programs[pc]+">> Error var not define";
                    }
                }
                if(variableExists(args[1])){
                    
                        values[variableIndex(args[1])]=vals;
                        iiii=0
                    }else{
                         if (isNumericOrAlphanumeric(args[1])){
                              debugs.textContent=programs[pc]+">> Error address memory not suport";
                              iiii=0;
                        }else{
                              addVariableToList(args[1]);
                              values[variableIndex(args[1])]=vals;
                              iiii=0;
                        }
                        
                    }

            }   
            if (args[0]=="ADD" && args.length>2){
                
                if (isNumericOrAlphanumeric(args[2])){
                    
                    vals=parseInt(args[2]);
                    
                }else{
                    if(variableExists(args[2])){
                        vals=getValueFromVariableList(args[2]);
                    }else{
                        debugs.textContent=programs[pc]+">> Error var not define";
                    }
                }
                if(variableExists(args[1])){
                        
                        values[variableIndex(args[1])]= values[variableIndex(args[1])]+vals;
                        iiii=0
                    }else{
                         if (isNumericOrAlphanumeric(args[1])){
                              debugs.textContent=programs[pc]+">> Error address memory not suport";
                              iiii=0;
                        }else{
                              addVariableToList(args[1]);
                              values[variableIndex(args[1])]=values[variableIndex(args[1])]+vals;
                              iiii=0;
                        }
                        
                    }

            }   
            if (args[0]=="SUB" && args.length>2){
                
                if (isNumericOrAlphanumeric(args[2])){
                    
                    vals=parseInt(args[2]);
                    
                }else{
                    if(variableExists(args[2])){
                        vals=getValueFromVariableList(args[2]);
                    }else{
                        debugs.textContent=programs[pc]+">> Error var not define";
                    }
                }
                if(variableExists(args[1])){
                        
                        values[variableIndex(args[1])]= values[variableIndex(args[1])]-vals;
                        iiii=0
                    }else{
                         if (isNumericOrAlphanumeric(args[1])){
                              debugs.textContent=programs[pc]+">> Error address memory not suport";
                              iiii=0;
                        }else{
                              addVariableToList(args[1]);
                              values[variableIndex(args[1])]=values[variableIndex(args[1])]-vals;
                              iiii=0;
                        }
                        
                    }

            }   
            if (args[0]=="MUL" && args.length>2){
                
                if (isNumericOrAlphanumeric(args[2])){
                    
                    vals=parseInt(args[2]);
                    
                }else{
                    if(variableExists(args[2])){
                        vals=getValueFromVariableList(args[2]);
                    }else{
                        debugs.textContent=programs[pc]+">> Error var not define";
                    }
                }
                if(variableExists(args[1])){
                        
                        values[variableIndex(args[1])]= values[variableIndex(args[1])]*vals;
                        iiii=0
                    }else{
                         if (isNumericOrAlphanumeric(args[1])){
                              debugs.textContent=programs[pc]+">> Error address memory not suport";
                              iiii=0;
                        }else{
                              addVariableToList(args[1]);
                              values[variableIndex(args[1])]=values[variableIndex(args[1])]*vals;
                              iiii=0;
                        }
                        
                    }

            }
            if (args[0]=="DIV" && args.length>2){
                
                if (isNumericOrAlphanumeric(args[2])){
                    
                    vals=parseInt(args[2]);
                    
                }else{
                    if(variableExists(args[2])){
                        vals=getValueFromVariableList(args[2]);
                    }else{
                        debugs.textContent=programs[pc]+">> Error var not define";
                    }
                }
                if(variableExists(args[1])){
                        
                        values[variableIndex(args[1])]= values[variableIndex(args[1])]/vals;
                        iiii=0
                    }else{
                         if (isNumericOrAlphanumeric(args[1])){
                              debugs.textContent=programs[pc]+">> Error address memory not suport";
                              iiii=0;
                        }else{
                              addVariableToList(args[1]);
                              values[variableIndex(args[1])]=values[variableIndex(args[1])]/vals;
                              iiii=0;
                        }
                        
                    }

            }
            if (args[0]=="AND" && args.length>2){
                
                if (isNumericOrAlphanumeric(args[2])){
                    
                    vals=parseInt(args[2]);
                    
                }else{
                    if(variableExists(args[2])){
                        vals=getValueFromVariableList(args[2]);
                    }else{
                        debugs.textContent=programs[pc]+">> Error var not define";
                    }
                }
                if(variableExists(args[1])){
                        
                        values[variableIndex(args[1])]= values[variableIndex(args[1])]&vals;
                        iiii=0
                    }else{
                         if (isNumericOrAlphanumeric(args[1])){
                              debugs.textContent=programs[pc]+">> Error address memory not suport";
                              iiii=0;
                        }else{
                              addVariableToList(args[1]);
                              values[variableIndex(args[1])]=values[variableIndex(args[1])]&vals;
                              iiii=0;
                        }
                        
                    }

            } 
            if (args[0]=="OR" && args.length>2){
                
                if (isNumericOrAlphanumeric(args[2])){
                    
                    vals=parseInt(args[2]);
                    
                }else{
                    if(variableExists(args[2])){
                        vals=getValueFromVariableList(args[2]);
                    }else{
                        debugs.textContent=programs[pc]+">> Error var not define";
                    }
                }
                if(variableExists(args[1])){
                        
                        values[variableIndex(args[1])]= values[variableIndex(args[1])]|vals;
                        iiii=0
                    }else{
                         if (isNumericOrAlphanumeric(args[1])){
                              debugs.textContent=programs[pc]+">> Error address memory not suport";
                              iiii=0;
                        }else{
                              addVariableToList(args[1]);
                              values[variableIndex(args[1])]=values[variableIndex(args[1])]|vals;
                              iiii=0;
                        }
                        
                    }

            }           
            if(iiii!=0)debugs.textContent=programs[pc]+">> instruction error";
        }
        
        pc=pc+1;
        updateVariableInList()
    }
    
});
