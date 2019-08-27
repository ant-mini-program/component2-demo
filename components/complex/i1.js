Component({
  data: {
    o: {
      value: "scope-value"
    }
  },
  onInit() {
    console.log("i1 onInit", this.props, this.data);
  },
  deriveDataFromProps(nextProps) {
    console.log("i1 deriveDataFromProps", nextProps, this.props, this.data);
  },
  didMount() {
    console.log("i1 didMount", this.props, this.data);
  },
  didUpdate(prevProps, prevData) {
    console.log("i1 didUpdate", prevProps, prevData, this.props, this.data);
  },
  didUnmount() {
    console.log("i1 didUnmount");
  },
  methods: {
    change() {
      this.setData({ 'o.value': "changed-scope-value" });
    }
  }
});
