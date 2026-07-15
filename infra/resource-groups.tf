# Tag-based AWS Resource Group replacing the deprecated myApplications console.
# Account-scoped: created once from the prod environment only.
resource "aws_resourcegroups_group" "snap_motorsports" {
  count = var.env == "prod" ? 1 : 0

  name        = "snap-motorsports"
  description = "All Snap Motorsports Website infrastructure grouped by App tag."

  resource_query {
    query = jsonencode({
      ResourceTypeFilters = ["AWS::AllSupported"]
      TagFilters = [{
        Key    = "App"
        Values = ["Snap Motorsports Website"]
      }]
    })
  }
}
