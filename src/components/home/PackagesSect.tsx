import PackageSelect from "./PackageSelect"

const PackagesSect = () => {
  return (
    <div className="m-2" id="section">
        <h2 className="PackText font-bold mb-4">Choose a Package</h2>
        <div>
            <PackageSelect />
        </div>
    </div>
  )
}

export default PackagesSect