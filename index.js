﻿require.config({
    paths: {
        jquery: 'vendor/jquery-1.9.0.min',
        underscore: 'vendor/lodash.min',
        backbone: 'vendor/backbone',
        epoxy: 'vendor/backbone.epoxy',
        ribs: 'backbone.ribs'
    }/*,
    shim: {
        'backbone': {
            deps: ['jquery', 'lodash'],
            exports: 'Backbone'
        }
    }*/
});

require([
    'ribs',
    'epoxy'
], function() {
    $(document).ready(function() {
        var extend = {
            defaults: {
                bar: 10,
                foo: 20
            },

            computeds: {
                simpleComp: function () {
                    return 'simple';
                },
                barComp: {
                    deps: ['bar', 'foo'],
                    get: function (bar, foo) {
                        return bar + '-' + foo;
                    },
                    set: function (val) {
                        val = val.split('-');

                        return {
                            bar:  parseInt(val[0]),
                            foo: parseInt(val[1])
                        }
                    }
                }
            }
        };


        /*var model = window.model = new (Backbone.Ribs.Model.extend(_.cloneDeep(extend)));

        var epModel = window.epModel = new (Backbone.Epoxy.Model.extend(_.cloneDeep(extend)));

        var bModel = window.bModel = new (Backbone.Model.extend(_.cloneDeep(extend)));

        var BindingView = Backbone.Ribs.View.extend({
            bindings: {
                //'.bind-span': 'text:model.foo,css:{color:model.col,font-weight:model.weight},attr:{data-type:model.type},classes:{active:model.active,passive:model.passive},toggle:model.active',
                //'.bind-span': 'classes:{active:not(model.active),passive:model.passive},toggle:not(model.active)',
                //'.bind-span': 'text:summ(model.num1,model.num2),css:{color:model.col,font-weight:model.weight}'
                //'.bind-input': 'value:model.foo,events:[keyup,change]',
                //'.bind-textarea': 'value:model.text',
                //'.bind-checkbox': 'checked:model.ch',
                //'.bind-checkbox-single': 'checked:model.chs,enabled:model.active',
                //'.bind-radio': 'checked:model.rad,disabled:model.active'
                '.bind-span': 'text:model.foo.bar'
            },

            filters: {
                summ: function (a, b) {
                    return a + b;
                }
            },

            initialize: function () {
                this.setElement('.content');

                this.model = window.bindModel = new Backbone.Ribs.Model({
                    foo: {
                        bar: 456
                    },
                    'col': 'red',
                    'weight': 900,
                    'type': 'asdf',
                    ch: ['la1', 'la3'],
                    chs: true,
                    rad: 'la2',
                    text: '2l4hl12h4l12h4',
                    active: true,
                    passive: false,
                    num1: '15',
                    num2: '13'
                });
            }
        });

        var view = window.bindView = new BindingView();*/

        var ItemView = Backbone.View.extend({

            initialize: function () {
                this.setElement('<div class="item-view">' + this.model.get('a') + '</div>');
            }
        });



        var CollectionView = Backbone.Ribs.View.extend({

            bindings: {
                'el':'text:colFilter(col.a.b)'
            },

            filters: {
                colFilter: function (a) {
                    var sum = 0;

                    for (var i = 0; i < a.length; i++) {
                        sum += a[i];
                    }

                    return sum;
                }
            },

            initialize: function () {
                this.col = new Backbone.Collection([
                    new Backbone.Ribs.Model({a: {b: 3}}),
                    new Backbone.Ribs.Model({a: {b: 5}}),
                    new Backbone.Ribs.Model({a: {b: 8}})
                ]);

                window.col = this.col;

                this.setElement('.bind-col-change');
            }
        });



        var colView = window.colView = new CollectionView();


        /*var Model = Backbone.Ribs.Model.extend({
            computeds: {
                a: {
                    deps: ['foo.bar'],
                    get: function (a) {
                        return 'comp ' + a;
                    }
                }
            },

            defaults: {
                foo: {
                    bar: 'test',
                    deepFoo: {
                        deepBar: 'deepTest'
                    }
                },
                'foo.bar': 'dot'
            }
        });

        window.model = new Model();*/

        /*model.on('change:foo.bar', function () {console.log('tada');});
        model.on('change:foo!.bar', function () {console.log('ta!!!da');});

        console.log(model.get('foo.bar')); //"test"

        console.log(model.get('foo.deepFoo.deepBar')); //"deepTest"

        console.log(model.get('foo!.bar')); //"dot"*/










    });
});