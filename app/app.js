angular.module("gym-reg-app", [])

    .controller("FormController", function(){
        var fc = this;
        fc.currentMember;
        fc.members = [];
        
        fc.addMember = function(member){
            fc.members.push(member);
            fc.currentMember = member;
            fc.calcPayment();
            console.log(fc.members)
        }
        
        
        fc.addDependents = function(dependentMember){
            if (!fc.currentMember.dependents){
                fc.currentMember.dependents = [];
            }
            fc.currentMember.dependents.push(dependentMember);
            fc.dependent = "";
            fc.calcPayment();
            console.log(fc.currentMember.dependents)
        }
        
        fc.calcPayment = function(){
            fc.currentMember.monthlyFee = 30;
            if (fc.currentMember.dependents) {
                fc.currentMember.monthlyFee += fc.currentMember.dependents.length*5
            }
        }
        
        
        
        
    })