const element = document.querySelector('#select-id');
const choices = new Choices(element, {
searchEnabled: false, shouldSort: false, shouldSortItems: false,itemSelectText: '',callbackOnInit: 1, placeholder:true,renderChoiceLimit:2,  position: 'bottom',
});